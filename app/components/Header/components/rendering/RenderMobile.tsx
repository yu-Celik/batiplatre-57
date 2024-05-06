'use client'

import { heightHeader } from '@/libs/theme'
import Grid from '@mui/material/Unstable_Grid2';
import MenuToggle from 'components/Header/components/MenuToggle'
import dynamic from 'next/dynamic';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';

const CustomSwipeableDrawer = dynamic(() => import('@/components/Header/components/Drawer/SwipeableDrawer'), {
    loading: () => <CircularProgress />
})
type Props = {
    pages: { label: string, path: string, display: string }[]
}
export default function RenderMobile({ pages }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Grid id={'RenderMobile'} xs={2} sm={0} display={{ xs: 'flex', sm: 'none' }} alignItems={'center'} minHeight={heightHeader} justifyContent={'flex-end'}>
                <MenuToggle open={isOpen} onClick={handleOpen} aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"} sx={{ "&:focus-visible": { outline: "2px solid #000" } }} />
            </Grid>
            <CustomSwipeableDrawer pages={pages.filter(page => page.display === 'sm')} isOpen={isOpen} toggleOpen={handleOpen} />
        </>
    )
}