'use client'
import { Button, Container, Typography, useTheme } from "@mui/material";
import { DirectionsRun } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { StaggeredFadeInScrollBox } from "@/components/motion/StaggeredFadeInScrollBox";

type Props = {}
export default function SectionThree({ }: Props) {
    const theme = useTheme();
    const router = useRouter()

    return (
        <Container
            component={'article'}
            className="min-h-72 md:min-h-[40svh] rounded-none bg-grey-50 dark:bg-grey-900"
            disableGutters
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mt: { xs: 6, sm: 6, md: 0 },
                mb: { xs: 2, sm: 2, md: 0 },
                mx: { md: 0 },
                maxWidth: { md: '100%' },
            }}
        >
            <StaggeredFadeInScrollBox className='flex flex-col items-center justify-center'>
                <div className="px-4 py-16">
                    <Typography variant="h3" fontWeight={700} fontSize={{ xs: 32, md: 48 }} textAlign={'center'}>
                        Prêt à transformer votre espace ?
                    </Typography>
                </div>
                <Button
                    component={Link}
                    href={'/devis'}
                    variant={`${theme.palette.mode === 'light' ? 'contained' : 'outlined'}`}
                    color="secondary"
                    startIcon={<DirectionsRun />}
                    sx={{
                        px: 4,
                        py: 1,
                        mb: 2,
                        borderRadius: 2,
                    }}
                    aria-label="Commencer le devis maintenant"

                >
                    Commencez maintenant !
                </Button>
            </StaggeredFadeInScrollBox>
        </Container >
    )
}

