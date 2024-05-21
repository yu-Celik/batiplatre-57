'use client'
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardActions, Typography, Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { z } from 'zod';
import { useFormApi } from '../hooks/useFormApi';
import StepForm from './StepForm';

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
    adresse: z.string().trim().min(1, { message: "L'adresse est requise" }),
    codePostal: z.string().trim().min(1, { message: "Le code postal est requis" }),
    ville: z.string().trim().min(1, { message: "Ville est requise" }),
    theme: z.string().trim().min(1, { message: "Thème est requis" }),
    message: z.string().trim().min(1, { message: "Message est requis" }),
})

// Définir le type des données du formulaire
type FormData = z.infer<typeof validationSchema>;

export default function FormCard() {
    const [step, setStep] = useState<number>(0);
    const { register, handleSubmit, formState: { errors }, trigger, setValue } = useForm<FormData>({
        resolver: zodResolver(validationSchema),
    });
    const { validateAddress, sendFormData, fetchAddress, addressOptions, setAddressOptions } = useFormApi();

    const steps: string[] = ['Nom et Prénom', 'Contact', 'Localisation', 'Thème et Message'];

    const handleNext = async () => {
        let fieldsToValidate: (keyof FormData)[] = [];
        if (step === 0) fieldsToValidate = ["nom", "prenom"];
        if (step === 1) fieldsToValidate = ["email", "telephone"];
        if (step === 2) fieldsToValidate = ["adresse", "codePostal", "ville"];
        if (step === 3) fieldsToValidate = ["theme", "message"];

        const isValid = await trigger(fieldsToValidate);
        if (isValid) {
            setStep((prevStep) => prevStep + 1);
        }
    };

    const handleBack = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const isAddressValid = await validateAddress(data.adresse);
        if (!isAddressValid) {
            console.error("L'adresse n'est pas valide");
            return;
        }
        await sendFormData(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <Card raised sx={{
                maxWidth: 450,
                minWidth: 450,
                my: 2,
                width: '100%',
                backgroundColor: 'var(--mui-palette-background-paper)',
                p: 2,
            }}>
                <CardContent>
                    <Typography variant="h2" fontWeight="300" fontSize={{ md: "2rem" }} gutterBottom>
                        Un projet ?
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Simple et rapide, réponse sous 48h !
                    </Typography>
                    <Stepper activeStep={step} alternativeLabel sx={{ my: 3 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Box
                        sx={{
                            '& .MuiTextField-root': {
                                width: '95%',
                                mx: 'auto'
                            },
                        }}
                    >
                        <AnimatePresence initial={false} mode="wait">
                            <StepForm
                                step={step}
                                register={register}
                                errors={errors}
                                setValue={setValue}
                                trigger={trigger}
                                fetchAddress={fetchAddress}
                                addressOptions={addressOptions}
                                setAddressOptions={setAddressOptions}
                            />
                        </AnimatePresence>
                    </Box>
                </CardContent>
                <CardActions>
                    {step > 0 && (
                        <Button onClick={handleBack} size="large" variant="outlined" color="secondary" sx={{ mt: 4, width: '40%', mx: 'auto' }}>
                            Retour
                        </Button>
                    )}
                    {step < 3 ? (
                        <Button onClick={handleNext} size="large" variant="contained" color="primary" sx={{ mt: 4, width: '60%', mx: 'auto' }}>
                            Suivant
                        </Button>
                    ) : (
                        <Button type="submit" size="large" variant="contained" color="primary" sx={{ mt: 4, width: '100%', mx: 'auto' }}>
                            Envoyer
                        </Button>
                    )}
                </CardActions>
            </Card>
        </form>
    );
}