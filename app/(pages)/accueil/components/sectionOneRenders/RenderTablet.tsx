import { Container, Typography, Button, Box, Card, CardContent } from '@mui/material';
import { RightCardDecoration } from '@/components/ui/CardDecoration';
import img21 from '@/assets/chantier photo/plat.jpg';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { amber } from '@mui/material/colors';
import { Timelapse, AutoAwesome, PriceCheck, DoneAll } from '@mui/icons-material';


type Props = {}
export default function RenderTablet({ }: Props) {

    return (
        <>
            <Container component={'article'} disableGutters
                className='dark:backdrop-brightness-100 bg-gradientToBottomLight dark:bg-gradientToBottom'
                sx={{
                    mt: 4,
                    display: { xs: 'none', sm: 'block', md: 'none' }
                }}
            >
                <Container id='section-one' className='min-[630px]:py-2 min-[630px]:px-3' sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 },
                    paddingX: { xs: 0, sm: 2, md: 0, lg: 0, xl: 0 },
                }}>
                    <RightCardDecoration className='bg-amber-500 dark:bg-amber-600 mb-2 w-1/4 h-full'>
                        <Container
                            disableGutters
                            sx={{
                                position: 'relative',
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center',
                                mb: 2
                            }}
                        >
                            <Image
                                src={img21}
                                width={900}
                                height={900}
                                alt="Design intérieur élégant"
                                placeholder="blur"
                                quality={100}
                                style={{
                                    objectFit: 'cover',
                                    // borderRadius: '100% 100% 0 0',
                                    borderRadius: '1rem',
                                    filter: 'brightness(0.90)'
                                }}
                                className='w-full h-72 aspect-square'
                            />
                            <Image
                                src={img21}
                                width={900}
                                height={900}
                                alt="Design intérieur élégant"
                                placeholder="blur"
                                quality={100}
                                style={{
                                    objectFit: 'cover',
                                    // borderRadius: '100% 100% 0 0',
                                    borderRadius: '1rem',
                                    filter: 'brightness(0.90)'
                                }}
                                className='w-full h-72 aspect-square'
                            />
                        </Container>
                        <Container disableGutters sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            '& .MuiCard-root': {
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                position: 'relative',
                                gap: '1rem',
                                backdropFilter: 'brightness(1.5)',
                                borderRadius: '1rem',
                                marginBottom: '1rem',
                                '&:last-child': {
                                    marginBottom: 0
                                }
                            },
                            '& .MuiTypography-root': {
                                width: '80%'
                            },
                            '& span': {
                                // minHeight: '12rem',
                            },
                            '& strong': {
                                fontWeight: '500'
                            }
                        }}>

                            <Card raised>
                                <CardContent>
                                    <Typography
                                        variant="h3"
                                        fontSize={'24px'}
                                        color='secondary'
                                        sx={{
                                            '&.MuiTypography-root': {
                                                display: 'block',
                                                width: '90%'
                                            }
                                        }}
                                    >
                                        Trois raisons de choisir <strong>BatiPlatre57</strong> pour transformer votre <strong></strong>espace.
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card raised>
                                <CardContent>
                                    <div className='absolute right-5 inset-y-2.5'>
                                        <DoneAll fontSize='large' color='success' />
                                    </div>
                                    <Typography variant="h6" pb={1}>
                                        <strong>1. Expertise</strong> et <strong>personnalisation</strong>
                                    </Typography>
                                    <Typography variant="body2">
                                        Chaque <strong>projet</strong> est une <strong>création unique</strong>, adaptée à vos <strong>besoins</strong> et à votre <strong>style de vie</strong>, transformant chaque <strong>espace</strong> en un lieu de vie <strong>unique</strong> et <strong>personnalisé</strong>.
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card raised>
                                <CardContent>
                                    <div className='absolute right-5 inset-y-2.5'>
                                        <DoneAll fontSize='large' color='success' />
                                    </div>

                                    <Typography variant="h6" pb={1}>
                                        <strong>2. Qualité</strong> et <strong>durabilité</strong>
                                    </Typography>
                                    <Typography variant="body2">
                                        Nous nous engageons à utiliser des <strong>matériaux de haute qualité</strong> et des <strong>techniques éprouvées</strong> pour assurer la <strong>fiabilité</strong> et la <strong>longévité</strong> de vos installations.
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card raised >
                                <CardContent>
                                    <div className='absolute right-5 inset-y-2.5'>
                                        <DoneAll fontSize='large' color='success' />
                                    </div>

                                    <Typography variant="h6" pb={1}>
                                        <strong>3. Rapport qualité-prix</strong>
                                    </Typography>
                                    <Typography variant="body2">
                                        Nous offrons des <strong>solutions compétitives</strong> sans compromettre la <strong>qualité</strong>, valorisant un <strong>travail bien fait</strong> qui nécessite du <strong>temps</strong>, des <strong>compétences</strong> et des <strong>ressources adéquates</strong>.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Container>
                    </RightCardDecoration>
                    <Button
                        component={Link}
                        href={'/nos-realisations'}
                        variant="contained"
                        fullWidth
                        color="primary"
                        size='large'
                        sx={{
                            mt: 4
                        }}
                    >
                        Découvrez nos réalisations
                    </Button>
                </Container>
            </Container >
        </>
    )
}
