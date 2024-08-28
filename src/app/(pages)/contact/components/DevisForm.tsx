'use client';

import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import DevisFormInteractive from '@/app/(pages)/contact/components/DemandeTypeSelector';
import useSendMail from '@/app/hooks/useSendMail';
import { MailType } from '@/app/libs/models/model_mail';

const DevisForm = () => {
    const [formData, setFormData] = useState<MailType>({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        subject: 'Description de projet',
        message: '',
    });
    const { sendMail, loading, error, success } = useSendMail();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await sendMail(formData);
            setFormData({ fullName: '', email: '', phone: '', address: '', subject: 'Question', message: '' });
        } catch (err) {
            // L'erreur est déjà gérée dans le hook
        }
    };

    return (
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField sx={{ width: { xs: '100%', md: '45%' }, mr: { md: 2 } }} name="fullName" label="Nom complet" variant="outlined" margin="normal" placeholder="Jean Dupont" required value={formData.fullName} onChange={handleChange} />
            <TextField sx={{ width: { xs: '100%', md: '45%' }, mr: { md: 2 } }} name="email" label="Email" type="email" variant="outlined" margin="normal" placeholder="jean.dupont@gmail.com" required value={formData.email} onChange={handleChange} />
            <TextField sx={{ width: { xs: '100%', md: '45%' }, mr: { md: 2 } }} name="phone" label="Numéro de téléphone" type="tel" variant="outlined" margin="normal" placeholder="06 12 34 56 78" required value={formData.phone} onChange={handleChange} />
            <TextField sx={{ width: { xs: '100%', md: '45%' }, mr: { md: 2 } }} name="address" label="Adresse" type="address" variant="outlined" margin="normal" placeholder="123 Rue de la Paix, 75000 Paris, France" required value={formData.address} onChange={handleChange} />
            <DevisFormInteractive value={formData.subject} message={formData.message} onChange={(subject, message) => setFormData({ ...formData, subject, message })} />

            <Button variant="contained" color="primary" sx={{ my: 2, width: { xs: '100%', md: '45%' } }} type="submit" disabled={loading}>
                {loading ? 'Envoi en cours...' : 'Envoyer'}
            </Button>

            {error && (
                <Typography variant="body1" color="error" textAlign="center">
                    {error}
                </Typography>
            )}
            {success && (
                <Typography variant="body1" color="success.main" textAlign="center">
                    {success}
                </Typography>
            )}
        </Box>
    );
};

export default DevisForm;