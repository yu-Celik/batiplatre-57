'use client';

import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField } from '@mui/material';
import { Subject } from '@/app/libs/schemas/contact.schema';

interface DemandeTypeSelectorProps {
    subjectValue: Subject;
    messageValue: string;
    subjectError?: string;
    messageError?: string;
    onChange: (subject: Subject, message: string) => void;
}

const DemandeTypeSelector: React.FC<DemandeTypeSelectorProps> = ({
    subjectValue,
    messageValue,
    subjectError,
    messageError,
    onChange
}) => {
    const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value as Subject, messageValue);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(subjectValue, event.target.value);
    };

    return (
        <>
            <FormControl 
                component="fieldset" 
                sx={{ mt: 2, width: '100%' }}
                error={!!subjectError}
            >
                <FormLabel 
                    component="legend" 
                    sx={{ color: subjectError ? 'error.main' : 'primary.main' }}
                >
                    Type de demande
                </FormLabel>
                <RadioGroup
                    row
                    aria-label="type de demande"
                    name="subject"
                    value={subjectValue}
                    onChange={handleSubjectChange}
                >
                    {Object.values(Subject).map((subject) => (
                        <FormControlLabel
                            key={subject}
                            value={subject}
                            control={<Radio />}
                            label={subject}
                            sx={{
                                color: subjectValue === subject ? 'primary.main' : 'text.secondary'
                            }}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
            
            <TextField
                label={subjectValue === Subject.DESCRIPTION_PROJET ? "Description du projet" : "Votre question"}
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                required
                value={messageValue}
                onChange={handleMessageChange}
                error={!!messageError}
                helperText={messageError}
                fullWidth
                aria-label="Message"
            />
        </>
    );
};

export default DemandeTypeSelector;