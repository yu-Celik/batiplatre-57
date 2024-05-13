'use client'
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { DirectionsRun } from "@mui/icons-material";
import { alpha } from "@mui/system";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useRouter } from 'next/navigation'

type Props = {}
export default function SectionThree({ }: Props) {
    const theme = useTheme();
    const router = useRouter()

    return (
        <Container disableGutters>
            <Box
                className={cn(`min-h-72 rounded-none bg-gradientToBottomLight dark:bg-gradientToBottom`)}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {/* <ScrollBoxHorizontal > */}
                    <div className="px-4 py-6">
                        <Typography variant="h3" fontWeight={700} fontSize={theme.typography.pxToRem(32)} textAlign={'center'}>
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
                            animation: 'pulse 4s linear infinite',
                            borderRadius: 2,
                            '@keyframes pulse': {
                                '0%': {
                                    boxShadow: `0 0.5px 5px 0.5px${alpha(theme.palette.secondary.main, 0.4)}`
                                },
                                '70%': {
                                    boxShadow: `0 0.5px 15px 0.5px ${alpha(theme.palette.secondary.main, 0)}`
                                },
                                '100%': {
                                    boxShadow: `0 0.5px 5px 0.5px ${alpha(theme.palette.secondary.main, 0.4)}`
                                }
                            }
                        }}
                        aria-label="Commencer le devis maintenant"

                    >
                        Commencez maintenant !
                    </Button>
                {/* </ScrollBoxHorizontal> */}
            </Box>
        </Container>
    )
}