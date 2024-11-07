import nodemailer from 'nodemailer';
import type { TransportOptions } from 'nodemailer';

// Type personnalisé pour les erreurs Nodemailer
interface NodemailerError extends Error {
    code?: string;
    command?: string;
    response?: string;
    responseCode?: number;
}

console.log("🔧 Initialisation de Nodemailer");
console.log("📧 Configuration email:", {
    user: process.env.EMAIL_USER ? "Défini" : "Non défini",
    pass: process.env.EMAIL_PASS ? "Défini" : "Non défini",
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT
});

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    debug: true,
    logger: true
} as TransportOptions);

// Vérification de la configuration avec le bon typage
transporter.verify(function(error: NodemailerError | null, success) {
    if (error) {
        console.error('❌ Erreur de configuration du transporteur:', error);
        console.error('Details de l\'erreur:', {
            message: error.message,
            code: error.code,
            command: error.command,
            response: error.response,
            responseCode: error.responseCode
        });
    } else {
        console.log('✅ Serveur SMTP prêt à envoyer des emails');
        console.log('Configuration validée:', success);
    }
});

export default transporter;
export type { NodemailerError };