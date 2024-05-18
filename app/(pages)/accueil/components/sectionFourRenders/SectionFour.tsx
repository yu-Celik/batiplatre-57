import { CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';

const RenderDesktop = dynamic(() => import('(pages)/accueil/components/sectionFourRenders/RenderDesktop'), {
    loading: () => <CircularProgress />,
})
const RenderMobile = dynamic(() => import('(pages)/accueil/components/sectionFourRenders/RenderMobile'), {
    loading: () => <CircularProgress />,
})

type Props = {}
export default function SectionFour({ }: Props) {


    return (
        <>
            <RenderMobile />
            <RenderDesktop />
        </>
    )
}