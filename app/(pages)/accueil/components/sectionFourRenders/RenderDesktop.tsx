import { Box } from "@mui/material"

type Props = {}
export default function RenderDesktop({}: Props) {
  return (
    <Box component={'section'} position={'relative'} display={{ xs: 'none', md: 'flex' }} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mb={2} sx={{ '& strong': { fontWeight: 500 } }}>
        
    </Box>
  )
}

