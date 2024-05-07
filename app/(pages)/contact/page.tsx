import RenderDesktop from "./components/RenderDesktop"
import RenderMobile from "./components/RenderMobile"

type Props = {}
export default function page({ }: Props) {
  return (
    <>
      <RenderMobile />
      <RenderDesktop />
    </>
  )
}

