import { Box, Container, Typography, Button } from '@mui/material';
import { LiveHelp } from '@mui/icons-material';
import Link from 'next/link';

export default function ConsultationBox() {

    return (
        <Container sx={{
            position: 'relative',
            my: 6,
            px: { sm: 2 },
            display: { xs: 'block', md: 'none' }
        }}>
            <Box component={'article'} sx={{
                backgroundColor: 'var(--mui-palette-background-paper)',
                borderRadius: 'var(--mui-shape-borderRadius)',
                boxShadow: 'var(--mui-shadows-10)',
                p: '3rem',
            }}>
                <LiveHelp color='secondary' sx={{ fontSize: 100, position: 'absolute', top: 0, right: 0, bottom: 0, transform: 'translate(0, -50%)' }} />
                <Typography variant="h3" gutterBottom sx={{ mt: 2, textAlign: 'left', maxWidth: '22rem' }}>
                    Avez-vous des questions spécifiques ou besoin d&apos;une consultation personnalisée ?
                </Typography>
                <Typography variant="body1" paragraph sx={{ mt: 1, textAlign: 'left', maxWidth: '26rem' }}>
                    Nous mettrons tout en œuvre pour vous fournir toutes les informations nécessaires et vous guider dans vos choix.
                </Typography>
                <Button
                    variant="contained"
                    component={Link}
                    size="large"
                    color="secondary"
                    fullWidth
                    sx={{ mt: 2 }}
                    href="/contact"
                >
                    Parlez à un conseiller
                </Button>
            </Box>
        </Container>
    );
}