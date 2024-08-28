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
    try {
        const body = await req.json();

        const error = validateEmail(body);
        if (error) {
            return NextResponse.json({ message: error }, { status: 400 });
        }

        const db = await connectDB();

        const mail = new Mail(body);
        await db.collection("mails").insertOne(mail);

        console.log(body);
        console.log(process.env.EMAIL_USER);
        console.log(process.env.EMAIL_PASS);
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Nouveau message de ${body.fullName} avec le sujet ${body.subject}`,
            text: `
                Email: ${body.email}
                Téléphone: ${body.phone}
                Adresse: ${body.address}
                Message: ${body.message}
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            return NextResponse.json({ message: "Message envoyé avec succès !" });
        } catch (error: any) {
            console.error("Erreur détaillée:", error);
            if (error.code === 'EAUTH') {
                return NextResponse.json({ message: "Erreur d'authentification lors de l'envoi du mail. Vérifiez vos identifiants." }, { status: 500 });
            }
            return NextResponse.json({ message: "Une erreur est survenue lors de l'envoi du mail" }, { status: 500 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Une erreur est survenue lors de l'envoi du mail" }, { status: 500 });
    }
}