import { NextRequest, NextResponse } from "next/server";
import Mail from "@/app/libs/models/model_mail";
import { connectDB } from "@/app/libs/mongoDB";
import transporter from "@/app/libs/mailer";
import { ObjectId } from "mongodb";
import { parse } from 'valibot';
import { contactSchema, type ContactData } from '@/app/libs/schemas/contact.schema';

// Type pour les erreurs Nodemailer
interface NodemailerError extends Error {
    code?: string;
    command?: string;
    response?: string;
}

// Type pour les erreurs de base de données
interface DatabaseError extends Error {
    code?: string;
}

export async function POST(req: NextRequest) {
    const mailId = new ObjectId();
    console.log("🚀 Début du traitement POST /mails");
    
    try {
        const body = await req.json();
        console.log("📦 Données reçues:", body);

        // Validation avec Valibot
        try {
            console.log("🔍 Début de la validation Valibot");
            parse(contactSchema, body);
            console.log("✅ Validation réussie");
        } catch (validationError: any) {
            console.error("❌ Erreur de validation Valibot:", validationError);
            console.error("Details des erreurs:", validationError.issues);
            return NextResponse.json({ 
                message: "Données invalides", 
                errors: validationError.issues 
            }, { status: 400 });
        }

        console.log("🔌 Tentative de connexion à la base de données");
        const db = await connectDB();
        console.log("✅ Connexion BD réussie");

        const mail = new Mail({
            ...body,
            _id: mailId,
            nodemailerStatus: 'sent',
            createdAt: new Date()
        });

        console.log("📧 Mail à insérer:", mail.toObject());
        await db.collection("mails").insertOne(mail);
        console.log("✅ Mail inséré dans la BD avec succès");

        // Vérification des paramètres de configuration nodemailer
        console.log("📨 Configuration Nodemailer:", {
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            user: process.env.EMAIL_USER ? "Défini" : "Non défini",
            pass: process.env.EMAIL_PASS ? "Défini" : "Non défini"
        });

        // Envoi asynchrone de l'email
        console.log("🚀 Démarrage de l'envoi d'email asynchrone");
        sendMailAsync(mail as ContactData, transporter);

        return NextResponse.json({ message: "Message envoyé avec succès !" });
    } catch (error: any) {
        console.error("❌ Erreur générale:", error);
        if (error instanceof Error) {
            console.error("Stack trace:", error.stack);
        }
        return NextResponse.json(
            { message: "Erreur lors de l'envoi du message." }, 
            { status: 500 }
        );
    }
}

function sendMailAsync(mail: ContactData, transporter: any) {
    console.log("📨 Début sendMailAsync");
    console.log("Données du mail:", mail);
    
    setTimeout(async () => {
        try {
            console.log("🔄 Tentative d'envoi d'email via Nodemailer");
            console.log("📧 Configuration email:", {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: `Nouveau message de ${mail.fullName}`
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
                `,
            });
            console.log("✅ Email envoyé avec succès!", result);
        } catch (error) {
            const nodemailerError = error as NodemailerError;
            console.error("❌ Erreur lors de l'envoi de l'email:", nodemailerError);
            console.error("Details de l'erreur:", {
                message: nodemailerError.message,
                code: nodemailerError.code,
                command: nodemailerError.command,
                response: nodemailerError.response
            });
            handleErrorAsync(mail._id as unknown as ObjectId, nodemailerError);
        }
    }, 0);
}

function handleErrorAsync(mailId: ObjectId, error: NodemailerError) {
    console.log("⚠️ Début handleErrorAsync");
    console.log("ID du mail:", mailId);
    console.log("Erreur à traiter:", error);

    setTimeout(async () => {
        try {
            console.log("🔄 Tentative de mise à jour du statut dans la BD");
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
            console.log("✅ Statut d'erreur mis à jour dans la BD");
        } catch (error) {
            const dbError = error as DatabaseError;
            console.error("❌ Erreur lors de la mise à jour du statut:", dbError);
            console.error("Details de l'erreur BD:", {
                message: dbError.message,
                code: dbError.code
            });
        }
    }, 0);
}