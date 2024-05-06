'use client'
import { Button, Divider, FormControl, TextField, Typography, useTheme } from "@mui/material";

export default function ContactCard() {
    const theme = useTheme();
    return (
        <FormControl
            sx={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                width: '93%',
                left: "50%",
                transform: "translate(-50%, 5%)",
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.background.paper,
                boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                padding: theme.spacing(3)
            }}
            aria-label="Formulaire de contact"
        >
            <Typography variant="h3" fontSize={theme.typography.pxToRem(28)} pt={0} mb={5} textAlign="center">
                Contactez-nous
            </Typography>
            <Divider absolute sx={{
                top: "16.5%",
                bottom: "16.5%",
                width: "100%",
                backgroundColor: theme.palette.background.default
            }} />
            <TextField
                label="Nom"
                fullWidth
                variant="filled"
                sx={{ mb: 1.5 }}
                type="text"
                required
                aria-required="true"
            />
            <TextField
                label="E-mail"
                fullWidth
                variant="filled"
                sx={{ mb: 1.5 }}
                type="email"
                required
                aria-required="true"
            />
            <TextField
                label="Message"
                multiline
                rows={4}
                fullWidth
                variant="filled"
                sx={{ mb: 1.5 }}
                type="text"
                required
                aria-required="true"
            />
            <Button
                variant="outlined"
                color="primary"
                sx={{
                    marginTop: 2,
                    fontSize: theme.typography.pxToRem(16)
                }}
                aria-label="Envoyer le message"
            >
                Envoyer
            </Button>
        </FormControl>
    )
}