'use client'
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardActions, Typography, TextField, MenuItem, Button, Box, Stepper, Step, StepLabel, InputAdornment } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { z } from 'zod';
import FormDialog from "./FormDialog";

// Définir le schéma de validation avec Zod
const validationSchema = z.object({
    nom: z.string().trim().min(1, { message: "Nom est requis" }),
    prenom: z.string().trim().min(1, { message: "Prénom est requis" }),
    email: z.string().trim().email({ message: "L'e-mail est requis" }),
    telephone: z.string().trim().regex(/^(0|\+33\s?|6\s?|1\s?)[1-9](\s?\d{2}){4}$/, { message: "Téléphone est requis et doit être au format valide" }),
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
    const { register, handleSubmit, formState: { errors }, trigger } = useForm<FormData>({
        resolver: zodResolver(validationSchema),
    });

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

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    return (
        <Card raised sx={{
            maxWidth: 450,
            minWidth: 450,
            my: 2,
            width: '100%',
            backgroundImage: 'linear-gradient(45deg, var(--mui-palette-background-paper) 25%, transparent 25%, transparent 75%, var(--mui-palette-background-paper) 75%, var(--mui-palette-background-paper) 100%)',
            backgroundSize: '2rem 2rem',
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
                    component="form"
                    position="relative"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                        '& .MuiTextField-root': {
                            width: '95%',
                            mx: 'auto'
                        },
                    }}
                >
                    <AnimatePresence initial={false} mode="wait">
                        {step === 0 && (
                            <motion.div
                                key="step-0"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                                transition={{ type: 'spring', duration: 0.25 }}
                            >
                                <TextField
                                    id="nom"
                                    label="Nom"
                                    variant="outlined"
                                    margin="none"
                                    required
                                    {...register("nom")}
                                    error={!!errors.nom}
                                    helperText={errors.nom ? errors.nom.message : ""}
                                    fullWidth
                                />
                                <TextField
                                    id="prenom"
                                    label="Prénom"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    {...register("prenom")}
                                    error={!!errors.prenom}
                                    helperText={errors.prenom ? errors.prenom.message : ""}
                                    fullWidth
                                />
                            </motion.div>
                        )}
                        {step === 1 && (
                            <motion.div
                                key="step-1"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                                transition={{ type: 'spring', duration: 0.25 }}
                            >
                                <TextField
                                    id="email"
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    margin="none"
                                    type="email"
                                    required
                                    {...register("email")}
                                    error={!!errors.email}
                                    helperText={errors.email ? errors.email.message : ""}
                                />
                                <TextField
                                    id="telephone"
                                    fullWidth
                                    label="Téléphone"
                                    variant="outlined"
                                    margin="normal"
                                    type="text"
                                    required
                                    {...register("telephone", {
                                        setValueAs: (value) => value.startsWith('0') ? `+33 ${value.slice(1)}` : value
                                    })}
                                    error={!!errors.telephone}
                                    helperText={errors.telephone ? errors.telephone.message : ''}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">+33</InputAdornment>,
                                    }}
                                />
                            </motion.div>
                        )}
                        {step === 2 && (
                            <motion.div
                                key="step-2"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                                transition={{ type: 'spring', duration: 0.25 }}
                            >
                                <TextField
                                    id="adresse"
                                    fullWidth
                                    label="Adresse"
                                    variant="outlined"
                                    margin="dense"
                                    required
                                    // type="address"
                                    {...register("adresse")}
                                    error={!!errors.adresse}
                                    helperText={errors.adresse ? errors.adresse.message : ""}
                                />
                                <TextField
                                    id="codePostal"
                                    fullWidth
                                    label="Code postal"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    {...register("codePostal")}
                                    error={!!errors.codePostal}
                                    helperText={errors.codePostal ? errors.codePostal.message : ""}
                                />
                                <TextField
                                    id="ville"
                                    fullWidth
                                    label="Ville"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    {...register("ville")}
                                    error={!!errors.ville}
                                    helperText={errors.ville ? errors.ville.message : ""}
                                />
                            </motion.div>
                        )}
                        {step === 3 && (
                            <>
                                <motion.div
                                    key="step-3"
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 100 }}
                                    transition={{ type: 'spring', duration: 0.25 }}
                                >
                                    <TextField
                                        id="theme"
                                        fullWidth
                                        select
                                        label="Thème"
                                        variant="outlined"
                                        margin="none"
                                        {...register("theme")}
                                        error={!!errors.theme}
                                        helperText={errors.theme ? errors.theme.message : ""}
                                    >
                                        <MenuItem value="Demande de travaux">Demande de travaux</MenuItem>
                                        <MenuItem value="Autre">Autre</MenuItem>
                                    </TextField>
                                    <TextField
                                        id="message"
                                        fullWidth
                                        label="Message"
                                        variant="outlined"
                                        margin="normal"
                                        multiline
                                        rows={4}
                                        placeholder="Votre message"
                                        {...register("message")}
                                        error={!!errors.message}
                                        helperText={errors.message ? errors.message.message : ""}
                                    />
                                </motion.div>
                            </>
                        )}
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
        </Card >
    );
}
