import { photos } from "@/app/data/galeriePhotos"
import GaleriePhotos from "./components/GaleriePhotos"
type Props = {}
function page({ }: Props) {
    return (
        <>
            <GaleriePhotos photos={photos} />
        </>
    )
}
export default page