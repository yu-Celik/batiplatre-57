import NosEngagements from "./nos-engagements/RenderMobile"
import NosPrestations from "./nos-prestations/RenderMobile"
import ContactSection from "@/app/components/ContactSection/RenderMobile"

type Props = {}
function page({ }: Props) {
    return (
        <>
            <NosEngagements />
            <NosPrestations />
            <ContactSection />

        </>
    )
}
export default page