'use client'
import { TextDecoration } from "@/components/ui/CircleScrollAnimation"
import { Box, TextField, MenuItem, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, useTheme, Container } from "@mui/material"
import Image from 'next/image'
import accueil6 from './../../../../public/accueil6.webp';
import { RestartAlt, LiveHelp } from '@mui/icons-material';
import { useState } from 'react';

type Props = {}
export default function RenderDesktop({ }: Props) {
    const theme = useTheme()

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleReset = () => {
        handleClose();
    };

    return (
        <Container
            component={'section'}
            sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                marginTop: {
                    xs: 9, sm: '165px', md: 15
                },
                paddingX: 10,
            }}

        >

            <TextDecoration
                styles={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: { md: theme.typography.pxToRem(42) },
                    lineHeight: { md: theme.typography.pxToRem(48) },
                    maxWidth: '95%',
                    mt: 8,
                    paddingY: 10,
                    mb: 6
                }}
                variant="h1"
                text={<>Un projet ? Une question ?<span className="mt-2">Contactez BatiPlatre57 dès maintenant !</span></>}
            />

            <Typography variant="body1" textAlign={'center'} >
                Chez BatiPlatre57, nous sommes toujours prêts à répondre à vos questions et à vous fournir l&apos;assistance nécessaire pour concrétiser vos projets. Notre équipe est à votre disposition pour vous guider et vous conseiller à chaque étape. N&apos;hésitez pas à remplir le formulaire ci-dessous pour toute demande ou à nous contacter directement par téléphone ou email. Nous nous engageons à vous fournir une réponse rapide et personnalisée.
            </Typography>

            <Box
                component="form"
                position="relative"
                mt={8}
                display={{ md: 'flex' }}
                sx={{
                    height: 'fit-content',
                    backdropFilter: 'brightness(1.25)',
                    borderRadius: theme.shape.borderRadius,
                    '& .MuiTextField-root': {
                        width: '100%',
                        mx: 'auto',
                    },
                }}
            >
                <Image
                    src={accueil6}
                    alt="Contactez BatiPlatre57"
                    width={1920}
                    height={1080}
                    layout="responsive"
                    style={{
                        display: 'flex',
                        position: 'relative',
                        zIndex: 1,
                        maxWidth: '700px',
                        borderRadius: '80% 0%',
                        objectFit: 'cover',
                        paddingRight: theme.spacing(10)
                    }}
                />
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    transform: 'translate(0%,0%)',
                    width: '650px',
                    height: `100%`,
                    // backgroundColor: 'red',
                    backgroundColor: theme.palette.secondary.main,

                    // borderRadius: '0% 80%',
                    borderRadius: '70% 0%',


                }} />
                <div className="w-[40%] p-4">

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
                    <div className="flex flex-col pb-2">
                        <TextField id="nom" label="Nom" variant="outlined" margin="none" required />
                        <TextField id="prenom" label="Prénom" variant="outlined" margin="dense" required />
                    </div>
                    <div className="flex flex-col py-2 ">
                        <TextField id="email" fullWidth label="Email" variant="outlined" margin="normal" required />
                        <TextField id="telephone" fullWidth label="Téléphone" variant="outlined" margin="none" required />
                    </div>
                    <div className="flex flex-col py-2 ">
                        <TextField id="adresse" fullWidth label="Adresse" variant="outlined" margin="normal" required />
                        <TextField id="codePostal" fullWidth label="Code postal" variant="outlined" margin="none" required />
                        <TextField id="ville" fullWidth label="Ville" variant="outlined" margin="dense" required />
                    </div>
                    <div className="flex flex-col y-2 ">
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
                    <div className="flex flex-col pt-2 justify-center items-center">
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
                        <div className="flex flex-row w-full justify-between mt-8">
                            <Button type="submit" size="large" variant="contained" color="primary" sx={{ width: '100%', marginRight: 2 }}>
                                Envoyer
                            </Button>
                            <Button type="button" variant="outlined" color="secondary" onClick={handleClickOpen} sx={{ width: '20%' }}>
                                <RestartAlt />
                            </Button>
                        </div>

                    </div>
                </div>
            </Box>
            <Container
                component={'article'}
                sx={{
                position: 'relative',
                p: theme.spacing(6),
                mt: 8,
                boxShadow: theme.shadows[10],
                // width: '93%',
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
        </Container >
    )
}
