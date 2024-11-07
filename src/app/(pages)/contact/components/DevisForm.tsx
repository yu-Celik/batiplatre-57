'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { valibotResolver } from "@hookform/resolvers/valibot";
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';
import DevisFormInteractive from '@/app/(pages)/contact/components/DemandeTypeSelector';
import useSendMail from '@/app/hooks/useSendMail';
import { contactSchema, Subject, type ContactData } from '@/app/libs/schemas/contact.schema';
import { useTransition } from 'react';
import LoopIcon from '@mui/icons-material/Loop';
import SendIcon from '@mui/icons-material/Send';
import { MailType } from '@/app/libs/models/model_mail';

const DevisForm = () => {
    const { sendMail, loading, error, success } = useSendMail();
    const [isPending, startTransition] = useTransition();
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors },
    } = useForm<ContactData>({
        resolver: valibotResolver(contactSchema),
        mode: 'onBlur',
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            address: '',
            subject: Subject.DESCRIPTION_PROJET,
            message: '',
        },
    });

    const subjectValue = watch('subject');
    const messageValue = watch('message');

    const handleTypeChange = (subject: Subject, message: string) => {
        setValue('subject', subject, { shouldValidate: true });
        setValue('message', message, { shouldValidate: true });
    };

    const onSubmit = async (data: ContactData) => {
        startTransition(async () => {
            try {
                await sendMail(data as MailType);
                reset();
            } catch (err) {
                // L'erreur est déjà gérée dans le hook
            }
        });
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField
                fullWidth
                label="Nom complet"
                placeholder="Jean Dupont"
                margin="normal"
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
                {...register('fullName')}
                aria-label="Nom complet"
            />

            <TextField
                fullWidth
                label="Email"
                type="email"
                placeholder="jean.dupont@gmail.com"
                margin="normal"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register('email')}
                aria-label="Adresse email"
            />

            <TextField
                fullWidth
                label="Numéro de téléphone"
                type="tel"
                placeholder="06 12 34 56 78"
                margin="normal"
                error={!!errors.phone}
                helperText={errors.phone?.message}
                {...register('phone')}
                aria-label="Numéro de téléphone"
            />

            <TextField
                fullWidth
                label="Adresse"
                placeholder="123 Rue de la Paix, 75000 Paris, France"
                margin="normal"
                error={!!errors.address}
                helperText={errors.address?.message}
                {...register('address')}
                aria-label="Adresse postale"
            />

            <DevisFormInteractive
                subjectValue={subjectValue}
                messageValue={messageValue}
                subjectError={errors.subject?.message}
                messageError={errors.message?.message}
                onChange={handleTypeChange}
            />

            <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ my: 2 }}
                disabled={isPending}
                aria-label={isPending ? 'Envoi en cours' : 'Envoyer le formulaire'}
                endIcon={isPending ? <LoopIcon className="h-4 w-4 animate-spin" /> : <SendIcon />}
            >
                {isPending ? (
                    <>
                        Envoi en cours...
                    </>
                ) : (
                    <>
                        Envoyer
                    </>
                )}
            </Button>

            {error && (
                <Typography
                    variant="body1"
                    color="error"
                    textAlign="center"
                    role="alert"
                >
                    {error}
                </Typography>
            )}

            {success && (
                <Typography
                    variant="body1"
                    color="success.main"
                    textAlign="center"
                    role="alert"
                >
                    {success}
                </Typography>
            )}
        </Box>
    );
};

export default DevisForm;