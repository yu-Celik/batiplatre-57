import { Schema, model, models } from 'mongoose';

const mailSchema = new Schema({
    fullName: { type: String, required: true, minlength: 3, maxlength: 50 },
    email: { type: String, required: true, minlength: 3, maxlength: 50, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    phone: { type: String, required: true, minlength: 10, maxlength: 14, match: /^(\+33|0|\+49|0|\+41|0|\+352|0|\+32|0)[0-9]{9,10}$/ },
    address: { type: String, required: true, minlength: 3, maxlength: 100 },
    subject: { type: String, required: true, minlength: 8, maxlength: 30 },
    message: { type: String, required: true, minlength: 3, maxlength: 1000 },
    createdAt: { type: Date, default: Date.now },
});

const Mail = models.Mail || model('Mail', mailSchema);

export default Mail;

export interface MailType {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    subject: string;
    message: string;
    createdAt?: Date;
}