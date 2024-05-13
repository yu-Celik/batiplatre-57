'use client'
import { TextDecoration } from "@/components/ui/CircleScrollAnimation"
import { Box, Stack, TextField, MenuItem, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, useTheme, Container } from "@mui/material"
import Image from 'next/image'
import accueil6 from './../../../../public/accueil6.webp';
import { RestartAlt, LiveHelp } from '@mui/icons-material';
import { useState } from 'react';

type Props = {}
export default function RenderMobile({ }: Props) {
    const theme = useTheme()

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleReset = () => {
        // Logique pour réinitialiser le formulaire
        handleClose();
    };

    return (
        <Stack
            display={{ xs: 'flex', md: 'none' }}
            marginTop={{
                xs: 9, sm: '165px', md: '72px'
            }}
        // gap={6}
        >
            <div className="flex flex-col gap-4">
                <Image
                    src={accueil6}
                    alt="Contactez BatiPlatre57"
                    width={1920}
                    height={1080}
                    layout="responsive"
                    className="max-h-96"
                />
                {/* alt="Bureau de BatiPlatre57 avec un employé aidant un client" */}
                <TextDecoration
                    styles={{
                        display: 'flex',
                        flexDirection: 'column',
                        fontSize: { xs: '1.125rem', sm: theme.typography.pxToRem(24) },
                        lineHeight: { xs: '1.5rem', sm: theme.typography.pxToRem(32) },
                        maxWidth: { xs: '22rem', sm: '100%' },
                        paddingY: { xs: 4, sm: 8 },
                        mt: { xs: 2, sm: 4 }
                    }}
                    variant="h1"
                    text={<>Un projet ? Une question ?<span className="mt-2">Contactez BatiPlatre57 dès maintenant !</span></>}
                />
                <Typography variant="body1" sx={{ paddingX: 2, mt: 2 }}>
                    Nous sommes ravis de répondre à vos questions et de vous aider à réaliser vos projets. Remplissez le formulaire ou contactez-nous directement :
                </Typography>
            </div>
            <Box
                component="form"
                position="relative"
                sx={{
                    '& .MuiTextField-root': {
                        width: '80%',
                        mx: 'auto'
                    },
                }}
            >
                <Button type="button" variant="outlined" color="secondary" onClick={handleClickOpen} sx={{ position: 'sticky', top: { xs: '2rem', sm: '8rem', md: '2rem' }, left: '100%', transform: 'translateY(100%)', zIndex: 1, minWidth: 'fit-content', padding: 1 }}>
                    <RestartAlt />
                </Button>
                {/* Dialog for Reset Confirmation */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Confirmer la réinitialisation"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Êtes-vous sûr de vouloir réinitialiser le formulaire ? Toutes les données saisies seront perdues.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Annuler</Button>
                        <Button onClick={handleReset}>
                            Confirmer
                        </Button>
                    </DialogActions>
                </Dialog>
                <div className="flex flex-col backdrop-brightness-125 w-full py-2 pt-10">
                    <TextField id="nom" label="Nom" variant="outlined" margin="none" required />
                    <TextField id="prenom" label="Prénom" variant="outlined" margin="dense" required />
                </div>
                <div className="flex flex-col backdrop-brightness-125 w-full py-2 ">
                    <TextField id="email" fullWidth label="Email" variant="outlined" margin="normal" required />
                    <TextField id="telephone" fullWidth label="Téléphone" variant="outlined" margin="none" required />
                </div>
                <div className="flex flex-col backdrop-brightness-125 w-full py-2 ">
                    <TextField id="adresse" fullWidth label="Adresse" variant="outlined" margin="normal" required />
                    <TextField id="codePostal" fullWidth label="Code postal" variant="outlined" margin="none" required />
                    <TextField id="ville" fullWidth label="Ville" variant="outlined" margin="dense" required />
                </div>
                <div className="flex flex-col backdrop-brightness-125 w-full py-2 ">
                    <TextField
                        id="theme"
                        fullWidth
                        select
                        label="Thème"
                        variant="outlined"
                        margin="normal"
                        defaultValue="Demande de travaux"
                    >
                        <MenuItem value="Demande de travaux">Demande de travaux</MenuItem>
                        <MenuItem value="Autre">Autre</MenuItem>
                    </TextField>
                </div>
                <div className="flex flex-col backdrop-brightness-125 w-full py-2 pb-10">
                    <TextField
                        id="message"
                        fullWidth
                        label="Message"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={4}
                        placeholder="Votre message"
                    />
                    <Button type="submit" size="large" variant="contained" color="primary" sx={{ mt: 4, width: '80%', mx: 'auto' }}>
                        Envoyer
                    </Button>
                </div>

            </Box>
            <Container sx={{
                position: 'relative',
                p: theme.spacing(6),
                mt: 8,
                boxShadow: theme.shadows[10],
                width: '93%',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.background.paper,

            }}>
                <LiveHelp color='secondary' sx={{ fontSize: 100, position: 'absolute', top: 0, right: { xs: 0, sm: 20, md: 0 }, bottom: 0, transform: 'translate(0, -50%)' }} />
                <Typography variant="h2" gutterBottom sx={{ mt: 2, textAlign: 'left' }}>
                    Questions Fréquentes
                </Typography>
                <Typography variant="h6" color='secondary' gutterBottom sx={{ mt: 2 }}>
                    Comment puis-je suivre ma demande ?
                </Typography>
                <Typography variant="body1" paragraph gutterBottom>
                    Vous recevrez un email de confirmation une fois que votre demande aura été traitée. Vous pouvez également nous contacter directement si vous avez des questions spécifiques.
                </Typography>
                <Typography variant="h6" color='secondary' sx={{ mt: 2 }}>
                    Quels sont les délais de réponse ?
                </Typography>
                <Typography variant="body1">
                    Nous nous efforçons de répondre à toutes les demandes dans un délai de 24 heures.
                </Typography>
            </Container>
        </Stack >
    )
}
