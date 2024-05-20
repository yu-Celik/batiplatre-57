'use client'
import { useState } from "react";
import { Card, CardContent, CardActions, Typography, TextField, MenuItem, Button, Box, Stepper, Step, StepLabel } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import FormDialog from "./FormDialog";

export default function FormCard() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        adresse: '',
        codePostal: '',
        ville: '',
        theme: 'Demande de travaux',
        message: ''
    });
    const [errors, setErrors] = useState({
        email: false,
        telephone: false
    });

    const steps = ['Nom et Prénom', 'Contact', 'Localisation', 'Thème et Message'];

    const handleNext = () => {
        if (step === 1 && !formData.email && !formData.telephone) {
            setErrors({ email: true, telephone: true });
            return;
        }
        setStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
        if (id === 'email' || id === 'telephone') {
            setErrors({ email: false, telephone: false });
        }
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
                <Typography variant="h5" component="div" gutterBottom>
                    Un projet ?
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
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
                                    value={formData.nom}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                <TextField
                                    id="prenom"
                                    label="Prénom"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    value={formData.prenom}
                                    onChange={handleChange}
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
                                    margin="dense"
                                    error={errors.email}
                                    helperText={errors.email ? "Veuillez remplir soit l'email soit le téléphone" : ""}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <Typography variant="body2" align="left" sx={{ my: 0.5, pl: 2 }}>
                                    ou
                                </Typography>
                                <TextField
                                    id="telephone"
                                    fullWidth
                                    label="Téléphone"
                                    variant="outlined"
                                    margin="dense"
                                    error={errors.telephone}
                                    helperText={errors.telephone ? "Veuillez remplir soit l'email soit le téléphone" : ""}
                                    value={formData.telephone}
                                    onChange={handleChange}
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
                                    value={formData.adresse}
                                    onChange={handleChange}
                                />
                                <TextField
                                    id="codePostal"
                                    fullWidth
                                    label="Code postal"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    value={formData.codePostal}
                                    onChange={handleChange}
                                />
                                <TextField
                                    id="ville"
                                    fullWidth
                                    label="Ville"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    value={formData.ville}
                                    onChange={handleChange}
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
                                        value={formData.theme}
                                        onChange={handleChange}
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
                                        value={formData.message}
                                        onChange={handleChange}
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
