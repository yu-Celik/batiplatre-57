import SubtitleTitle from "@/app/components/SubtitleTitle"
import { Box, Button, Paper, Typography } from "@mui/material"
import Image from "next/image"
import homme_s_interoge from '@/app/assets/homme_s_interoge.png';
import Homme_svg from "./Homme_svg";
import { ArrowForwardIos } from "@mui/icons-material";

type Props = {}
function RenderMobile({ }: Props) {
  return (
    <Paper component="section" sx={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      py: 4,
      px: 2,
      marginBottom: 8
    }}>
      <SubtitleTitle href="/Pourquoi-nous-choisir" text="Découvrez nos services complets" sx={{ textAlign: "center" }} />
      <Typography gutterBottom variant="h3" sx={{ textAlign: "center", maxWidth: 350 }}>
        Prêt à transformer votre espace ?
      </Typography>
      <Button variant="outlined" color="primary" fullWidth endIcon={<ArrowForwardIos />}>
        Commencez maintenant
      </Button>
      <Box sx={{
        position: "absolute",
        bottom: { xs: 150, sm: 75 },
        right: { xs: 0, sm: 100 },
      }}>
        <Homme_svg />
      </Box>

    </Paper>
  )
}
export default RenderMobile