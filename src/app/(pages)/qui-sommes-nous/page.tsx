import IntroductionSection from "./introduction/RenderMobile"
import NotreHistoireSection from "./notre_histoire/RenderMobile"
import NosServicesSection from "./nos-services/RenderMobile"
import EngagementSection from "./engagement_qualite/RenderMobile"
import EngagementSectionDesktop from "./engagement_qualite/RenderDesktop"
import PourquoiNousChoisirSection from "./pourquoi_nous_choisir/RenderMobile"
import TemoignageSection from "./temoignage/RenderMobile"
import ContactSection from "@/app/components/ContactSection/RenderMobile"
type Props = {}
function page({ }: Props) {
  return (
    <>
      <IntroductionSection />
      <NotreHistoireSection />
      <NosServicesSection />
      <EngagementSection />
      <EngagementSectionDesktop />
      <PourquoiNousChoisirSection />
      <TemoignageSection />
      <ContactSection />
    </>
  )
}
export default page