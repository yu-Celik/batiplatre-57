import ContactForm from "@/app/components/ContactForm"
import NewsletterSignup from "@/app/components/NewsletterSignup"
import { Box } from "@mui/material"
type Props = {}
function RenderMobile({ }: Props) {
    return (
        <>
            <Box component="section" sx={{ display: 'flex', flexDirection: 'column', gap: 8, my: 8 }}>
                <ContactForm />
                <NewsletterSignup />
            </Box>

        </>
    )
}
export default RenderMobile