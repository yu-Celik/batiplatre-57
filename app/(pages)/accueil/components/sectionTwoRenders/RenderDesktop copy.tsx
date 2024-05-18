import { Card, CardContent, Container, Typography, CardMedia } from "@mui/material"
import name from '@/assets/chantier photo/2nd/IMG_20210107_162721.jpg';
import Grid2 from "@mui/material/Unstable_Grid2/";

type Props = {}
export default function RenderDesktop({ }: Props) {
    return (
        <Container component={'section'}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                py: 0,
                '& .MuiCard-root': {
                    display: 'flex',
                    flexDirection: 'column',
                    '& .MuiCardMedia-root': {
                        height: 220,
                    }
                },
                '& strong': {
                    fontWeight: '500'
                }
            }}>
            <Typography variant={'h2'} my={16} textAlign={'center'} sx={{ width: '100%' }}>
                Les étapes de votre projet
            </Typography>
            <Grid2 container gap={1} justifyContent={'center'}>
                <Card component={Grid2} md={3.9} variant={'elevation'}>
                    <CardMedia
                        title="Beau"
                        image={name.src} />
                    <CardContent>
                        <Typography gutterBottom variant={'h3'} fontSize={28} color={'primary'}>
                            <strong>Planification Initiale</strong>
                        </Typography>
                        <Typography gutterBottom variant={'h6'}>
                            La première étape vers la <strong>réussite</strong>
                        </Typography>
                        <Typography variant="body1">
                            Notre processus commence par une <strong>consultation détaillée</strong> pour comprendre vos <strong>besoins</strong> et vos attentes. Nous discutons de vos <strong>objectifs</strong>, évaluons les <strong>contraintes</strong> et proposons des <strong>solutions personnalisées</strong>. Cette étape est cruciale pour établir un plan solide qui guidera toutes les phases suivantes du projet.
                        </Typography>
                    </CardContent>
                </Card>
                <Card component={Grid2} md={3.9} variant={'elevation'}>
                    <CardMedia
                        title="Beau"
                        image={name.src} />
                    <CardContent>
                        <Typography gutterBottom variant={'h3'} fontSize={28} color={'primary'}>
                            <strong>Conception</strong> et <strong>Développement</strong>
                        </Typography>
                        <Typography gutterBottom variant={'h6'}>
                            Créer avec <strong>précision</strong>
                        </Typography>
                        <Typography variant="body1">
                            Après avoir établi un plan clair, nous démarrerons la phase de <strong>conception</strong>. Utilisant les dernières <strong>technologies de pointe</strong>, nous transformons les idées en plans détaillés. Chaque <strong>conception</strong> est revue et raffinée pour assurer qu&apos;elle répond bien à vos attentes avant de passer à la <strong>réalisation</strong>.
                        </Typography>
                    </CardContent>
                </Card>
                <Card component={Grid2} md={3.9} variant={'elevation'}>
                    <CardMedia
                        title="Beau"
                        image={name.src} />
                    <CardContent>
                        <Typography gutterBottom variant={'h3'} fontSize={28} color={'primary'}>
                            <strong>Exécution</strong> du Projet
                        </Typography>
                        <Typography gutterBottom variant={'h6'}>
                            <strong>Réalisation</strong> et <strong>finitions</strong>
                        </Typography>
                        <Typography variant="body1">
                            La dernière étape est l&apos;<strong>exécution</strong> du projet. Nos équipes travaillent avec efficacité pour <strong>matérialiser</strong> votre projet, en respectant strictement les normes de qualité du DTU et les délais convenus. Nous assurons une communication continue tout au long de cette phase pour garantir que le projet avance selon le plan. Une fois terminé, nous procédons à une inspection finale et à la <strong>livraison</strong> du projet.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid2>
        </Container>
    )
}

