import { CircularProgress } from "@mui/material"
import dynamic from "next/dynamic"


const RenderTablet = dynamic(() => import('(pages)/accueil/components/heroSectionRenders/RenderTablet'), {
  loading: () => <CircularProgress />,
})
const RenderMobile = dynamic(() => import('(pages)/accueil/components/heroSectionRenders/RenderMobile'), {
  loading: () => <CircularProgress />,
})
const RenderDesktop = dynamic(() => import('(pages)/accueil/components/heroSectionRenders/RenderDesktop'), {
  loading: () => <CircularProgress />,
})

// 71
type Props = {}
export default function HeroSection({ }: Props) {
  return (
    <>
      <RenderTablet />
      <RenderMobile />
      <RenderDesktop />
    </>
  )
}

