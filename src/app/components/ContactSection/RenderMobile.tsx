import ContactForm from "@/app/components/ContactForm"
import NewsletterSignup from "@/app/components/NewsletterSignup"
import { Box } from "@mui/material"
type Props = {}
function RenderMobile({ }: Props) {
    return (
        <>
            <Box component="section" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', gap: 8, my: { xs: 8, md: 16 } }}>
                <ContactForm />
                {/* <NewsletterSignup /> */}
            </Box>

        </>
    )
}
export default RenderMobile