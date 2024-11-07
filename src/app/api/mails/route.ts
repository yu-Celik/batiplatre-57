import { NextRequest, NextResponse } from "next/server";
import Mail from "@/app/libs/models/model_mail";
import { connectDB } from "@/app/libs/mongoDB";
import transporter from "@/app/libs/mailer";
import { ObjectId } from "mongodb";
import { parse } from 'valibot';
import { contactSchema, type ContactData } from '@/app/libs/schemas/contact.schema';
import { NodemailerError } from '@/app/libs/mailer';

export async function POST(req: NextRequest) {
    const mailId = new ObjectId();
    try {
        console.log("POST /mails");
        const body = await req.json();

        // Validation avec Valibot
        try {
            parse(contactSchema, body);
        } catch (validationError: any) {
            console.error("Erreur de validation:", validationError);
            return NextResponse.json({ 
                message: "Données invalides", 
                errors: validationError.issues 
            }, { status: 400 });
        }

        const db = await connectDB();
        const mail = new Mail({
            ...body,
            _id: mailId,
            nodemailerStatus: body.nodemailerStatus || 'sent',
            createdAt: new Date()
        });

        console.log("mail avant insertion:", mail.toObject());
        await db.collection("mails").insertOne(mail);

        // Envoi asynchrone de l'email
        sendMailAsync(mail as ContactData, transporter);

        return NextResponse.json({ message: "Message envoyé avec succès !" });
    } catch (error: any) {
        console.error("Erreur lors de l'insertion dans la base de données:", error);
        return NextResponse.json(
            { message: "Erreur lors de l'envoi du message." }, 
            { status: 500 }
        );
    }
}


function sendMailAsync(mail: ContactData, transporter: any) {
    console.log("📨 Début sendMailAsync");
    console.log("Configuration du transporteur:", {
        host: transporter.options.host,
        port: transporter.options.port,
        secure: transporter.options.secure,
        auth: {
            user: transporter.options.auth.user ? "Défini" : "Non défini",
            pass: transporter.options.auth.pass ? "Défini" : "Non défini"
        }
    });
    
    setTimeout(async () => {
        try {
            console.log("🔄 Tentative d'envoi d'email");
            console.log("Destinataire:", process.env.EMAIL_USER);
            console.log("Contenu du mail:", {
                subject: `Nouveau message de ${mail.fullName}`,
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER
            });

            const result = await transporter.sendMail({
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
                html: `
                    <h2>Nouveau message de contact</h2>
                    <p><strong>De:</strong> ${mail.fullName}</p>
                    <p><strong>Email:</strong> ${mail.email}</p>
                    <p><strong>Téléphone:</strong> ${mail.phone}</p>
                    <p><strong>Adresse:</strong> ${mail.address}</p>
                    <p><strong>Sujet:</strong> ${mail.subject}</p>
                    <h3>Message:</h3>
                    <p>${mail.message.replace(/\n/g, '<br>')}</p>
                    <p><em>Date: ${new Date().toLocaleString()}</em></p>
                `
            });
            
            console.log("✅ Email envoyé avec succès!");
            console.log("Détails de l'envoi:", result);
        } catch (error: any) {
            const nodemailerError = error as NodemailerError;
            console.error("❌ Erreur lors de l'envoi de l'email:");
            console.error("Message d'erreur:", nodemailerError.message);
            console.error("Code d'erreur:", nodemailerError.code);
            console.error("Commande:", nodemailerError.command);
            console.error("Réponse du serveur:", nodemailerError.response);
            console.error("Code de réponse:", nodemailerError.responseCode);
            console.error("Stack trace complet:", nodemailerError.stack);
            handleErrorAsync(mail._id as unknown as ObjectId, nodemailerError);
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