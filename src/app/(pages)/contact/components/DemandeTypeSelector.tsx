'use client';

import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField } from '@mui/material';

interface DemandeTypeSelectorProps {
    value: string;
    message: string;
    onChange: (subject: string, message: string) => void;
}

const DemandeTypeSelector: React.FC<DemandeTypeSelectorProps> = ({ value, message, onChange }) => {
    const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange((event.target as HTMLInputElement).value, message);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(value, event.target.value);
    };

    return (
        <>
            <FormControl component="fieldset" sx={{ mt: 2, width: { xs: '100%' } }}>
                <FormLabel component="legend" sx={{ color: 'var(--mui-palette-primary-main)' }}>Type de demande</FormLabel>
                <RadioGroup
                    row
                    aria-label="demande type"
                    name="demandeType"
                    value={value}
                    onChange={handleSubjectChange}
                >
                    <FormControlLabel value="Description de projet" sx={{
                        color: value === 'Description de projet' ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-text-secondary)'
                    }} control={<Radio />} label="Description de projet" />
                    <FormControlLabel value="Question" sx={{
                        color: value === 'Question' ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-text-secondary)'
                    }} control={<Radio />} label="Question" />
                </RadioGroup>
            </FormControl>
            <TextField
                label={value === 'Description de projet' ? "Description du projet" : "Votre question"}
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                required
                value={message}
                onChange={handleMessageChange}
                sx={{ width: { xs: '100%', md: '91.5%' } }}
            />
        </>
    );
};

export default DemandeTypeSelector;