import { Container, Typography, Button, Card, CardContent } from '@mui/material';
import img21 from '@/assets/chantier photo/plat.jpg';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { CardDecoration } from '@/components/ui/CardDecoration';
import StepCard from '@/components/Card/StepCard';

type Props = {}
export default function RenderMobile({ }: Props) {
    return (
        <article className={cn(`brightness-100 dark:backdrop-brightness-100 bg-gradientToBottomLight dark:bg-gradientToBottom block sm:hidden`)}>
            <Container sx={{
                '& .MuiCard-root': {
                    position: 'relative'
                },
                '& strong': {
                    fontWeight: '500'
                },
                '& .MuiTypography-root': {
                    // maxWidth: '300px'
                }
            }}>
                <Typography variant="h3" gutterBottom>
                    Trois raisons de choisir <strong>BatiPlatre57</strong> pour transformer votre espace.
                </Typography>
                <CardDecoration className='bg-amber-500 dark:bg-amber-600 mb-2 w-1/3 h-full'>
                    <Image width={400} height={400} src={img21} alt="Design intérieur élégant" className="relative w-full h-80 object-cover rounded " />
                    <StepCard
                        title={<><strong>1. Expertise</strong> et <strong>personnalisation</strong></>}
                        description={<>Chaque <strong>projet</strong> est une <strong>création unique</strong>, adaptée à vos <strong>besoins</strong> et à votre <strong>style de vie</strong>, transformant chaque <strong>espace</strong> en un lieu de vie <strong>unique</strong> et <strong>personnalisé</strong>.</>}
                    />
                    <StepCard
                        title={<><strong>2. Qualité</strong> et <strong>durabilité</strong></>}
                        description={<>Nous nous engageons à utiliser des <strong>matériaux de haute qualité</strong> et des <strong>techniques éprouvées</strong> pour assurer la <strong>fiabilité</strong> et la <strong>longévité</strong> de vos installations.</>}
                    />
                    <StepCard
                        title={<><strong>3. Rapport qualité-prix</strong></>}
                        description={<>Nous offrons des <strong>solutions compétitives</strong> sans compromettre la <strong>qualité</strong>, valorisant un <strong>travail bien fait</strong> qui nécessite du <strong>temps</strong>, des <strong>compétences</strong> et des <strong>ressources adéquates</strong>.</>}
                    />
                </CardDecoration>
                <Button component={Link} href={'/nos-realisations'} aria-label="Voir nos réalisations" variant="contained" fullWidth color="primary" sx={{ mt: 2 }}>
                    Découvrez nos réalisations
                </Button>
            </Container>
        </article>
    )
}
