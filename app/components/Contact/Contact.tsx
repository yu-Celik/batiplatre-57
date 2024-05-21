'use client'
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardActions, Typography, TextField, MenuItem, Button, Box, Stepper, Step, StepLabel, InputAdornment, Autocomplete, Grid, FormControl } from "@mui/material";
import { LocationOn as LocationOnIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from "framer-motion";
import { z } from 'zod';
import axios from 'axios';
import parse from 'autosuggest-highlight/parse';


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
        return await validateAddress(value);
    }, {
        message: "L'adresse n'est pas valide"
    }),
    codePostal: z.string().trim().min(1, { message: "Le code postal est requis" }).refine(async (value) => {
        return await validateAddress(value);
    }, {
        message: "Le code postal n'est pas valide"
    }),
    ville: z.string().trim().min(1, { message: "Ville est requise" }).refine(async (value) => {
        return await validateAddress(value);
    }, {
        message: "La ville n'est pas valide"
    }),
    theme: z.string().trim().min(1, { message: "Thème est requis" }),
    message: z.string().trim().min(1, { message: "Message est requis" }),
})

const currencies = [
    {
        value: 'Débarras & Nettoyage',
        label: 'Débarras & Nettoyage',
    },
    {
        value: 'Platrerie & Isolation',
        label: 'Platrerie & Isolation',
    },
    {
        value: 'Aménagement & Rénovation',
        label: 'Aménagement & Rénovation',
    },
    {
        value: 'Peinture',
        label: 'Peinture',
    },
    {
        value: 'Pose de sol',
        label: 'Pose de sol',
    },
    {
        value: 'Autre',
        label: 'Autre',
    },
];

// Définir le type des données du formulaire
type FormData = z.infer<typeof validationSchema>;


const validateAddress = async (address: string, codePostal?: string, ville?: string) => {
    try {
        const query = `${address}${codePostal ? `&postcode=${codePostal}` : ''}${ville ? `&city=${ville}` : ''}`;
        const response = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${query}`);
        return response.data.features.length > 0;
    } catch (error) {
        console.error("Erreur lors de la validation de l'adresse:", error);
        return false;
    }
};

const sendFormData = async (data: FormData) => {
    try {
        const response = await axios.post('https://getform.io/f/qalovedb', data);
        console.log('Données envoyées avec succès:', response.data);
    } catch (error) {
        console.error('Erreur lors de l\'envoi des données:', error);
    }
};

export default function FormCard() {
    const [step, setStep] = useState<number>(0);
    const [addressOptions, setAddressOptions] = useState<any[]>([]);
    const { register, handleSubmit, formState: { errors }, trigger, setValue } = useForm<FormData>({
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

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const isAddressValid = await validateAddress(data.adresse, data.codePostal, data.ville);
        if (!isAddressValid) {
            console.error("L'adresse, le code postal ou la ville n'est pas valide");
            return;
        }
        await sendFormData(data);
    };

    const fetchAddress = async (query: string) => {
        try {
            const response = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${query}`);
            const addresses = response.data.features.map((feature: any) => ({
                label: feature.properties.label,
                postcode: feature.properties.postcode,
                city: feature.properties.city,
                main_text: feature.properties.name,
                secondary_text: feature.properties.context
            }));
            setAddressOptions(addresses);
        } catch (error) {
            console.error("Erreur lors de la récupération de l'adresse:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
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
                                        onChange={(e) => {
                                            setValue("nom", e.target.value);
                                            trigger("nom");
                                        }}
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
                                        onChange={(e) => {
                                            setValue("prenom", e.target.value);
                                            trigger("prenom");
                                        }}
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
                                        onChange={(e) => {
                                            setValue("email", e.target.value);
                                            trigger("email");
                                        }}
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
                                            setValueAs: (value) => {
                                                if (value.startsWith('0')) {
                                                    return `+33 ${value.slice(1)}`;
                                                } else if (!value.startsWith('+33')) {
                                                    return `+33 ${value}`;
                                                }
                                                return value;
                                            }
                                        })}
                                        error={!!errors.telephone}
                                        helperText={errors.telephone ? errors.telephone.message : ''}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">+33</InputAdornment>,
                                        }}
                                        onChange={(e) => {
                                            setValue("telephone", e.target.value);
                                            trigger("telephone");
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
                                    <Autocomplete
                                        id="adresse"
                                        options={addressOptions}
                                        getOptionLabel={(option) =>
                                            typeof option === 'string' ? option : option.label
                                        }
                                        filterOptions={(x) => x}
                                        autoComplete
                                        includeInputInList
                                        filterSelectedOptions
                                        noOptionsText="No locations"
                                        isOptionEqualToValue={(option, value) => option.label === value.label}
                                        onInputChange={async (event, newInputValue) => {
                                            await fetchAddress(newInputValue);
                                        }}
                                        onChange={(event, newValue) => {
                                            if (newValue) {
                                                setValue("adresse", newValue.label);
                                                setValue("codePostal", newValue.postcode);
                                                setValue("ville", newValue.city);
                                                trigger(["adresse", "codePostal", "ville"]);
                                            }
                                        }}
                                        renderOption={(props, option) => {
                                            const matches = option.main_text_matched_substrings || [];

                                            const parts = parse(
                                                option.main_text || '',
                                                matches.map((match: any) => [match.offset, match.offset + match.length]),
                                            );

                                            return (
                                                <li {...props}>
                                                    <Grid container alignItems="center">
                                                        <Grid item sx={{ display: 'flex', width: 44 }}>
                                                            <LocationOnIcon sx={{ color: 'text.secondary' }} />
                                                        </Grid>
                                                        <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                                                            {parts.map((part, index) => (
                                                                <Box
                                                                    key={index}
                                                                    component="span"
                                                                    sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}
                                                                >
                                                                    {part.text}
                                                                </Box>
                                                            ))}
                                                            <Typography variant="body2" color="text.secondary">
                                                                {option.secondary_text}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </li>
                                            );
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} label="Adresse" fullWidth />
                                        )}
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
                                        onChange={(e) => {
                                            setValue("codePostal", e.target.value);
                                            trigger("codePostal");
                                        }}
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
                                        onChange={(e) => {
                                            setValue("ville", e.target.value);
                                            trigger("ville");
                                        }}
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
                                            label="Votre projet | Travaux"
                                            variant="outlined"
                                            margin="none"
                                            defaultValue=""
                                            error={!!errors.theme}
                                            helperText={errors.theme ? errors.theme.message : "Choisissez un travaux"}
                                            {...register("theme")}
                                            onChange={(e) => {
                                                setValue("theme", e.target.value);
                                                trigger("theme");
                                            }}
                                        >
                                            {currencies.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
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
                                            onChange={(e) => {
                                                setValue("message", e.target.value);
                                                trigger("message");
                                            }}
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
            </Card>
        </form>
    );
}

