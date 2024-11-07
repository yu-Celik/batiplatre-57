import * as v from 'valibot';

// TypeScript
type ContactData = {
  _id?: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  subject: Subject;
  message: string;
};

export enum Subject {
  DESCRIPTION_PROJET = "Description de projet",
  QUESTION = "Question"
}

// Valibot
const contactSchema = v.object({
  fullName: v.pipe(
    v.string(),
    v.trim(),
    v.nonEmpty('Veuillez entrer votre nom.'),
    v.minLength(3, 'Le nom doit contenir au moins 2 caractères'),
    v.maxLength(50, 'Le nom ne peut pas dépasser 50 caractères')
  ),
  email: v.pipe(
    v.string(),
    v.trim(),
    v.nonEmpty('Veuillez entrer votre email.'),
    v.email('L\'email est mal formaté.'),
    v.minLength(3, 'L\'email doit contenir au moins 3 caractères'),
    v.maxLength(50, 'L\'email ne peut pas dépasser 50 caractères')
  ),
  phone: v.pipe(
    v.string(),
    v.trim(),
    v.regex(
      /^(\+33|0|\+49|0|\+41|0|\+352|0|\+32|0)[0-9]{9,10}$/,
      'Numéro de téléphone invalide'
    )
  ),
  address: v.pipe(
    v.string(),
    v.trim(),
    v.nonEmpty('Veuillez entrer votre adresse.'),
    v.minLength(3, 'L\'adresse doit contenir au moins 3 caractères'),
    v.maxLength(100, 'L\'adresse ne peut pas dépasser 100 caractères')
  ),
  subject: v.pipe(
    v.string(),
    v.trim(),
    v.enum(Subject, 'Veuillez entrer le sujet.'),
    v.minLength(2, 'Le sujet doit contenir au moins 2 caractères'),
    v.maxLength(30, 'Le sujet ne peut pas dépasser 30 caractères')
  ),
  message: v.pipe(
    v.string(),
    v.trim(),
    v.nonEmpty('Veuillez entrer votre message.'),
    v.minLength(10, 'Le message doit contenir au moins 10 caractères'),
    v.maxLength(1000, 'Le message ne peut pas dépasser 1000 caractères')
  ),
});

export { contactSchema, type ContactData };
