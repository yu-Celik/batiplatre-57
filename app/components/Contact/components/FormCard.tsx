import { z } from 'zod';
import { useFormApi } from '../hooks/useFormApi';

const validationSchema = z.object({
    nom: z.string().trim().min(1, { message: "Nom est requis" }),
    prenom: z.string().trim().min(1, { message: "Prénom est requis" }),
    email: z.string().trim().email({ message: "L'e-mail est requis" }),
    telephone: z.string().trim().min(1, { message: "Téléphone est requis" }).refine((value) => {
        const regex = /^(?:\+33\s?|0)[1-9](?:[\s.-]*\d{2}){4}$/;
        return regex.test(value);
    }, {
        message: "Le numéro de téléphone doit être au format +33 x xx xx xx xx ou 0x xx xx xx xx"
    }),
    adresse: z.string().trim().min(1, { message: "L'adresse est requise" }).refine(async (value) => {
        const validateAddress = useFormApi().validateAddress;
        return await validateAddress(value);
    }, {
        message: "L'adresse n'est pas valide"
    }),
    codePostal: z.string().trim().min(1, { message: "Le code postal est requis" }),
    ville: z.string().trim().min(1, { message: "Ville est requise" }),
    theme: z.string().trim().min(1, { message: "Thème est requis" }),
    message: z.string().trim().min(1, { message: "Message est requis" }),
})

// Définir le type des données du formulaire
type FormData = z.infer<typeof validationSchema>;

type Props = {}
export default function FormCard({ }: Props) {
    return (
        <div>FormCard</div>
    )
}