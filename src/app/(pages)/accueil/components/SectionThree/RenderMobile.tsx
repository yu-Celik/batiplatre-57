import SubtitleTitle from "@/app/components/SubtitleTitle"
import { Box, Button, Paper, Typography } from "@mui/material"
import Image from "next/image"
import homme_s_interoge from '@/app/assets/homme_s_interoge.png';
import Homme_svg from "./Homme_svg";
import { ArrowForwardIos } from "@mui/icons-material";

type Props = {}
function RenderMobile({ }: Props) {
  return (
    <Paper sx={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      py: 4,
      px: 2
    }}>
      <SubtitleTitle href="/Pourquoi-nous-choisir" text="Découvrez nos services complets" sx={{ textAlign: "center" }} />
      <Typography gutterBottom variant="h3" sx={{ textAlign: "center", maxWidth: 360 }}>
        Prêt à transformer votre espace ?
      </Typography>
      <Button variant="outlined" color="primary" endIcon={<ArrowForwardIos />}>
        Commencez maintenant
      </Button>
      <Box sx={{
        position: "absolute",
        bottom: 150,
        right: 0,
      }}>
        <Homme_svg />
      </Box>

    </Paper>
  )
}
export default RenderMobile