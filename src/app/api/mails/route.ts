import { NextRequest, NextResponse } from "next/server";
import Mail, { MailType } from "@/app/libs/models/model_mail";
import { connectDB } from "@/app/libs/mongoDB";
import validator from "validator";
import transporter from "@/app/libs/mailer";

function validateEmail(body: MailType) {
    if (!validator.isLength(body.fullName, { min: 3, max: 50 })) {
        return "Nom complet invalide : " + body.fullName;
    }
    if (!validator.isEmail(body.email)) {
        return "Email invalide : " + body.email;
    }
    if (!validator.matches(body.phone, /^(\+33|0|\+49|0|\+41|0|\+352|0|\+32|0)[0-9]{9,10}$/)) {
        return "Numéro de téléphone invalide : " + body.phone;
    }
    if (!validator.isLength(body.address, { min: 3, max: 100 })) {
        return "Adresse invalide : " + body.address;
    }
    if (body.subject !== 'Description de projet' && body.subject !== 'Question') {
        return "Sujet invalide : " + body.subject;
    }
    if (!validator.isLength(body.message, { min: 3, max: 1000 })) {
        return "Message invalide : " + body.message;
    }
    return null;
}

export async function POST(req: NextRequest) {
    let body: MailType | null = null;
    try {
        console.log("POST /mails");
        body = await req.json();

        const error = validateEmail(body as MailType);
        if (error) {
            return NextResponse.json({ message: error }, { status: 400 });
        }

        const db = await connectDB();
        const mail = new Mail({
            ...body,
            nodemailerStatus: 'pending'
        });

        // Insertion dans la base de données
        const dbPromise = db.collection("mails").insertOne(mail);

        // Envoi de l'e-mail
        const mailPromise = transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Nouveau message de ${body?.fullName} avec le sujet ${body?.subject}`,
            text: `
                Email: ${body?.email}
                Téléphone: ${body?.phone}
                Adresse: ${body?.address}
                Message: ${body?.message}
            `,
        });

        // Exécution des promesses en parallèle
        const [dbResponse, mailResponse] = await Promise.all([dbPromise, mailPromise]);

        // Mise à jour du statut de l'e-mail à 'sent'
        await db.collection("mails").updateOne(
            { _id: dbResponse.insertedId },
            { $set: { nodemailerStatus: 'sent' } }
        );

        return NextResponse.json({ message: "Message envoyé avec succès !" });
    } catch (error: any) {
        console.error("Erreur détaillée:", error);

        // Si l'insertion dans la base de données a réussi mais l'envoi de l'e-mail a échoué
        if (error.code !== 11000 && body) { // Vérification que body est défini
            try {
                const db = await connectDB();
                await db.collection("mails").updateOne(
                    { email: body.email, createdAt: { $gte: new Date(Date.now() - 60000) } }, // Recherche les entrées créées dans la dernière minute
                    {
                        $set: {
                            nodemailerStatus: 'error',
                            errorDetails: {
                                message: error.message || "Erreur inconnue",
                                code: error.code || "CODE_INCONNU",
                            }
                        }
                    }
                );
            } catch (dbError) {
                console.error("Erreur lors de la mise à jour du statut dans la base de données:", dbError);
            }
        }

        // Toujours renvoyer un message de succès au front-end
        return NextResponse.json({ message: "Message envoyé avec succès !" });
    }
}