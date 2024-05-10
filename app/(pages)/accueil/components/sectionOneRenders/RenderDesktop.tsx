import { Container, Typography, Button, Box, Card, CardContent, CardMedia, CardActions, Divider } from '@mui/material';
import { RightCardDecoration } from '@/components/ui/CardDecoration';
import img21 from '@/assets/chantier photo/plat.jpg';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { amber } from '@mui/material/colors';
import { Timelapse, AutoAwesome, PriceCheck, DoneAll } from '@mui/icons-material';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3dCard';
import { ParallaxScroll } from '@/components/motion/ParallaxScroll';
import { peintureImg } from '@/data/imageSlideHome';

const images = peintureImg.map(img => img.src);

type Props = {}
export default function RenderDesktop({ }: Props) {
    console.log(images)
    return (
        <>
            <Card variant='outlined' sx={{
                mt: 4,
                borderRight: 'none',
                borderLeft: 'none'
            }}>
                <Container component={'article'} disableGutters
                    sx={{
                        display: { xs: 'none', sm: 'none', md: 'flex' },
                        '& strong': {
                            fontWeight: '500'
                        },
                        '& .MuiCard-root': {
                            position: 'relative',
                            marginBottom: '4rem',
                            zIndex: 2
                        },
                        '& .MuiButtonBase-root': {
                            zIndex: 2


                        }
                    }}
                >
                    <CardContent sx={{ display: 'flex', position: 'relative', paddingY: 4 }}>
                        <Container
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                position: 'relative',
                                py: 0
                            }}>
                            <ParallaxScroll images={images} />
                        </Container>

                        <Container sx={{
                            position: 'relative',
                            height: 'fit-content',
                            py: 0
                        }}>
                            <Divider absolute orientation='vertical' textAlign='right' sx={{
                                width: '2px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                zIndex: 1
                            }} />
                            <Card variant='outlined' sx={{
                                mb: 0
                            }}>
                                <CardContent sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    '&:last-child': {
                                        pb: 2
                                    }
                                }}>
                                    <Typography
                                        variant="h3"
                                        fontSize={'24px'}
                                    >
                                        Trois raisons :
                                    </Typography>
                                </CardContent>
                            </Card>
                            <CardContainer variant='outlined'>
                                <CardBody className='relative'>
                                    <CardItem as={'div'} translateX={-10} translateZ={60} rotateZ={-10} className='absolute right-5 inset-y'>
                                        <DoneAll fontSize='large' color='success' />
                                    </CardItem>
                                    <CardItem as={Typography} variant="h6" color='secondary' pb={1} translateX={10} translateZ={60} sx={{
                                        maxWidth: 290
                                    }}>
                                        <strong>1. Expertise</strong> et <strong>personnalisation</strong>
                                    </CardItem>
                                    <CardItem as={Typography} variant="body2" fontSize={'16px'} translateX={10} translateZ={60}>
                                        Chaque <strong>projet</strong> est une <strong>création unique</strong>, adaptée à vos <strong>besoins</strong> et à votre <strong>style de vie</strong>, transformant chaque <strong>espace</strong> en un lieu de vie <strong>unique</strong> et <strong>personnalisé</strong>.
                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                            <CardContainer variant='outlined'>
                                <CardBody className='relative'>
                                    <CardItem as={'div'} translateX={-10} translateZ={60} rotateZ={-10} className='absolute right-5 inset-y'>
                                        <DoneAll fontSize='large' color='success' />
                                    </CardItem>
                                    <CardItem as={Typography} variant="h6" color='secondary' pb={1} translateX={10} translateZ={60} sx={{
                                        maxWidth: 290
                                    }}>
                                        <strong>2. Qualité</strong> et <strong>durabilité</strong>
                                    </CardItem>
                                    <CardItem as={Typography} variant="body2" fontSize={'16px'} translateX={10} translateZ={60}>
                                        Nous nous engageons à utiliser des <strong>matériaux de haute qualité</strong> et des <strong>techniques éprouvées</strong> pour assurer la <strong>fiabilité</strong> et la <strong>longévité</strong> de vos installations.
                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                            <CardContainer variant='outlined'>
                                <CardBody className='relative'>
                                    <CardItem as={'div'} translateX={-10} translateZ={60} rotateZ={-10} className='absolute right-5 inset-y'>
                                        <DoneAll fontSize='large' color='success' />
                                    </CardItem>
                                    <CardItem as={Typography} variant="h6" color='secondary' pb={1} translateX={10} translateZ={60} sx={{
                                        maxWidth: 290
                                    }}>
                                        <strong>3. Rapport qualité-prix</strong>
                                    </CardItem>
                                    <CardItem as={Typography} variant="body2" fontSize={'16px'} translateX={10} translateZ={60}>
                                        Nous offrons des <strong>solutions compétitives</strong> sans compromettre la <strong>qualité</strong>, valorisant un <strong>travail bien fait</strong> qui nécessite du <strong>temps</strong>, des <strong>compétences</strong> et des <strong>ressources adéquates</strong>.
                                    </CardItem>
                                </CardBody>

                            </CardContainer>
                            <CardActions sx={{ display: 'flex', justifyContent: 'center', p: 0 }}>
                                <Button variant='contained' color='primary' size="large">Découvrir nos réalisations</Button>
                            </CardActions>
                        </Container>
                    </CardContent>
                </Container >
            </Card >
        </>
    )
}
