import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    InputAdornment,
    Container
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const NewsletterSignup: React.FC = () => {
    return (
        <Paper elevation={3} sx={{ borderRadius: 'var(--mui-shape-borderRadius)', height: '100%' }}>
            <Container>
                <Typography variant="h6" component="h2" textAlign="center" sx={{
                    mb: 2,
                    color: 'transparent',
                    backgroundClip: 'text',
                    backgroundImage: 'linear-gradient(to right, var(--mui-palette-primary-light), var(--mui-palette-primary-dark))',
                    backgroundSize: '100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    Soucrivez à notre newsletter
                </Typography>

                <Typography variant="body2" textAlign="center" sx={{ mb: 3 }}>
                    Restez informé de nos dernières actualités, offres spéciales et conseils exclusifs. Inscrivez-vous dès maintenant pour ne rien manquer !
                </Typography>

                <Box component="form" sx={{ display: 'flex', position: 'relative' }}>
                    <TextField
                        fullWidth
                        label="E-mail"
                        variant="outlined"
                        type="email"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<PersonAddIcon />}
                        sx={{
                            height: 56,
                            minWidth: 'auto',
                            px: 2,
                            position: 'absolute',
                            right: 0,
                        }}
                    >
                        S&apos;inscrire
                    </Button>
                </Box>
            </Container>
        </Paper>
    );
};

export default NewsletterSignup;