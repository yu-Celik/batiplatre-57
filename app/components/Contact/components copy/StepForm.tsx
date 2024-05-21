'use client'

import { TextField, MenuItem, Autocomplete, Grid, Box, Typography, InputAdornment } from "@mui/material";
import { LocationOn as LocationOnIcon } from '@mui/icons-material';
import { motion } from "framer-motion";
import parse from 'autosuggest-highlight/parse';
import { AddressOption } from "../hooks/useFormApi";

type StepFormProps = {
    step: number;
    register: any;
    errors: any;
    setValue: any;
    trigger: any;
    fetchAddress: (query: string) => void;
    addressOptions: AddressOption[];
    setAddressOptions: (options: AddressOption[]) => void;
};

const StepForm = ({ step, register, errors, setValue, trigger, fetchAddress, addressOptions, setAddressOptions }: StepFormProps) => {


    return (
        <>
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
                            setValueAs: (value: string) => {
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
                        noOptionsText="Aucune adresse trouvée"
                        isOptionEqualToValue={(option, value) => option.label === value.label}
                        onInputChange={(event, newInputValue) => {
                            fetchAddress(newInputValue);
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
                                <li key={option.label} {...props}>
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
                        onChange={(e) => {
                            setValue("theme", e.target.value);
                            trigger("theme");
                        }}
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
                        onChange={(e) => {
                            setValue("message", e.target.value);
                            trigger("message");
                        }}
                    />
                </motion.div>
            )}
        </>
    );
};

export default StepForm;