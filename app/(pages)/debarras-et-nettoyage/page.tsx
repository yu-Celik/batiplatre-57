import ContactCard from "@/components/Contact/Contact"
import { TextDecoration } from "@/components/ui/CircleScrollAnimation"
import { Box, Container, Typography, Card, CardContent, CardMedia, Grid, Button } from "@mui/material"
import Image from "next/image"
import accueil7 from "../../../public/accueil7.webp"

type Props = {}
export default function page({ }: Props) {
  return (
    <>
      <Box sx={{ marginTop: '72px' }}>
        <Image src={accueil7} alt="Débarras et nettoyage" loading="eager"  priority style={{ objectFit: 'cover' }} />
        <TextDecoration text="Débarras et nettoyage" variant="h1" styles={{ marginTop: 8, marginBottom: 4 }} />
        <Container sx={{ marginBottom: 4, display: "flex", justifyContent: "center", flexDirection: "column" }}>
          <Container>
            <Typography variant="body1" gutterBottom>
              Des services de débarras et de nettoyage de haute qualité pour un espace impeccable
            </Typography>
            <Typography variant="body1" gutterBottom>
              Nous offrons des solutions complètes pour le débarras et le nettoyage de vos espaces, qu&apos;ils soient résidentiels ou commerciaux. Notre équipe expérimentée utilise des techniques avancées et des équipements de pointe pour garantir un résultat impeccable.
            </Typography>
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Contactez-nous dès maintenant
            </Button>
          </Container>
          <Container>
            <Typography variant="h3" fontSize={28} >
              Nos Services
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'start', my: 1.25, mb: 3 }}>
              <Box sx={{ width: '30%', height: '4px', backgroundColor: 'secondary.main', mb: 1 }}></Box>
              <Box sx={{ width: '10%', height: '4px', backgroundColor: 'secondary.main', mb: 1, ml: 1 }}></Box>
              <Box sx={{ width: '5%', height: '4px', backgroundColor: 'secondary.main', mb: 1, ml: 1 }}></Box>
              <Box sx={{ width: '2%', height: '4px', backgroundColor: 'secondary.main', mb: 1, ml: 1 }}></Box>
            </Box>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card>
                  <Image src={accueil7} alt="Débarras de maisons" priority={false} loading="lazy" width={1920} height={1080} />
                  <CardContent>
                    <Typography variant="h6" sx={{ marginBottom: 0.25 }}>Débarras de maisons</Typography>
                    <Typography variant="body2">
                      Nous débarrassons votre maison de tous les objets encombrants, en veillant à respecter vos biens et à recycler autant que possible.
                    </Typography>
                    <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                      En savoir plus
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card>
                  <Image src={accueil7} alt="Nettoyage après travaux" priority={false} loading="lazy" width={1920} height={1080} />
                  <CardContent>
                    <Typography variant="h6" sx={{ marginBottom: 0.25 }}>Nettoyage après travaux</Typography>
                    <Typography variant="body2">
                      Après des travaux de rénovation, nous assurons un nettoyage en profondeur pour que votre espace soit prêt à être utilisé immédiatement.
                    </Typography>
                    <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                      En savoir plus
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card>
                  <Image src={accueil7} alt="Entretien régulier" priority={false} loading="lazy" width={1920} height={1080} />
                  <CardContent>
                    <Typography variant="h6" sx={{ marginBottom: 0.25 }}>Entretien régulier</Typography>
                    <Typography variant="body2">
                      Nous proposons des services d&apos;entretien régulier pour maintenir vos espaces toujours propres et accueillants.
                    </Typography>
                    <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                      En savoir plus
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
          <Container sx={{ marginY: 4 }}>
            <Typography variant="h3" fontSize={28} gutterBottom>
              Démarches pour Débarras et Nettoyage
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'start', my: 1.25, mb: 3 }}>
              <Box sx={{ width: '30%', height: '4px', backgroundColor: 'secondary.main', mb: 1 }}></Box>
              <Box sx={{ width: '10%', height: '4px', backgroundColor: 'secondary.main', mb: 1, ml: 1 }}></Box>
              <Box sx={{ width: '5%', height: '4px', backgroundColor: 'secondary.main', mb: 1, ml: 1 }}></Box>
              <Box sx={{ width: '2%', height: '4px', backgroundColor: 'secondary.main', mb: 1, ml: 1 }}></Box>
            </Box>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card variant="outlined" sx={{
                  position: 'relative',
                  borderColor: 'secondary.main',
                  overflow: 'visible',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '1px',
                    height: '100%',
                    backgroundColor: 'secondary.main',
                    opacity: 1,
                    zIndex: -1
                  }
                }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ marginBottom: 0.25 }}>Étape 1: Évaluation</Typography>
                    <Typography variant="body2">
                      Nous commençons par une évaluation complète de l&apos;espace à nettoyer et à débarrasser pour comprendre vos besoins spécifiques.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card variant="outlined" sx={{
                  position: 'relative',
                  borderColor: 'secondary.main',
                  overflow: 'visible',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '1px',
                    height: '100%',
                    backgroundColor: 'secondary.main',
                    opacity: 1,
                    zIndex: -1
                  }
                }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ marginBottom: 0.25 }}>Étape 2: Planification</Typography>
                    <Typography variant="body2">
                      Nous élaborons un plan détaillé en tenant compte de vos contraintes de temps et de budget.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card variant="outlined" sx={{
                  position: 'relative',
                  borderColor: 'secondary.main',
                  overflow: 'visible',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '1px',
                    height: '100%',
                    backgroundColor: 'secondary.main',
                    opacity: 1,
                    zIndex: -1
                  }
                }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ marginBottom: 0.25 }}>Étape 3: Exécution</Typography>
                    <Typography variant="body2">
                      Notre équipe procède au débarras et au nettoyage en utilisant des techniques et des équipements professionnels pour garantir un résultat optimal.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card variant="outlined" sx={{
                  position: 'relative',
                  borderColor: 'secondary.main',
                  overflow: 'visible',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '1px',
                    height: '100%',
                    backgroundColor: 'secondary.main',
                    opacity: 1,
                    zIndex: -1
                  }
                }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ marginBottom: 0.25 }}>Étape 4: Vérification</Typography>
                    <Typography variant="body2">
                      Une fois le travail terminé, nous effectuons une vérification minutieuse pour nous assurer que tout est conforme à vos attentes.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card variant="outlined" sx={{
                  position: 'relative',
                  borderColor: 'secondary.main',
                }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ marginBottom: 0.25 }}>Étape 5: Suivi</Typography>
                    <Typography variant="body2">
                      Nous restons à votre disposition pour tout suivi nécessaire et pour garantir votre satisfaction totale.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Box>
    </>
  )
}
