import { NextRequest, NextResponse } from "next/server";
import Mail, { MailType } from "@/app/libs/models/model_mail";
import { connectDB } from "@/app/libs/mongoDB";
import validator from "validator";
import transporter from "@/app/libs/mailer";
import { ObjectId } from "mongodb";

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
    console.log("POST /mails");
    const mailId = new ObjectId();
    try {
        console.log('je suis la 1');
        console.log("req.json()", await req.json());
        const body = await req.json();
        console.log('je suis la 2');
        const error = validateEmail(body);
        if (error) {
            return NextResponse.json({ message: error }, { status: 400 });
        }
        console.log('je suis la 3');
        const db = await connectDB();
        console.log('je suis la 4');
        const mail = new Mail({
            ...body,
            _id: mailId,
            nodemailerStatus: body.nodemailerStatus || 'sent',
            createdAt: new Date()
        });
        console.log('je suis la 5');
        console.log("mail avant insertion:", mail.toObject());
        await db.collection("mails").insertOne(mail);
        console.log('je suis la 6');
        // Asynchronous email sending
        sendMailAsync(mail, transporter);

        return NextResponse.json({ message: "Message envoyé avec succès !" });
    } catch (error: any) {
        console.error("Erreur lors de l'insertion dans la base de données:", error);
        return NextResponse.json({ message: "Erreur lors de l'envoi du message." }, { status: 500 });
    }
}

function sendMailAsync(mail: MailType, transporter: any) {
    setTimeout(async () => {
        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: `Nouveau message de ${mail.fullName} avec le sujet ${mail.subject}`,
                text: `
                    Email: ${mail.email}
                    Téléphone: ${mail.phone}
                    Adresse: ${mail.address}
                    Message: ${mail.message}
                    Date: ${new Date().toLocaleString()}
                `,
            });
            console.log("Email envoyé avec succès !");
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'email:", error);
            handleErrorAsync(mail._id as ObjectId, error);
        }
    }, 0);
}

function handleErrorAsync(mailId: ObjectId, error: any) {
    setTimeout(async () => {
        try {
            const db = await connectDB();
            await db.collection("mails").updateOne(
                { _id: mailId },
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
            console.log(`Erreur d'email gérée pour l'ID : ${mailId}`);
        } catch (dbError) {
            console.error("Erreur lors de la mise à jour du statut de l'email dans la base de données:", dbError);
        }
    }, 0);
}