'use client';

import { useState } from 'react';
import { SwipeableDrawer, List, ListItemButton, ListItemText, Box, Typography } from "@mui/material";
import MenuToggle from "./MenuToggle/MenuToggle";
import Link from 'next/link';
import { servicesData } from '@/app/data/servicesData';

// Tableau d'objets pour les éléments du menu
const menuItems = [
    { text: 'Accueil', link: '/' },
    { text: 'Qui sommes-nous', link: '/qui-sommes-nous' },
    { text: 'Nos services', link: '/nos-services' },
    { text: 'Contact', link: '/contact' },
    { text: 'Processus de réalisation', link: '/processus-realisation' },
    { text: 'Nos réalisations', link: '/nos-realisations' },
    ...servicesData.map(service => ({ text: service.titleH1, link: `/services/${service.id}` }))
];

function RenderMobileMenu() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleLinkClick = () => {
        setOpen(false);
    };

    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const drawerContent = (
        <List>
            {menuItems.map((item) => (
                <ListItemButton 
                    component={Link} 
                    href={item.link} 
                    key={item.text}
                    onClick={handleLinkClick}
                >
                    <ListItemText primary={item.text} />
                </ListItemButton>
            ))}
        </List>
    );

    return (
        <>
            <MenuToggle open={open} onToggle={toggleDrawer(!open)} />
            <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                PaperProps={{
                    sx: {
                        width: '15rem',
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1.5rem 0.75rem 0' }}>
                    <Typography variant="h6" component="h2" sx={{ color: 'primary.main', padding: '0 1rem' }}>
                        Bâti Plâtre 57
                    </Typography>
                    <MenuToggle open={open} onToggle={toggleDrawer(!open)} />
                </Box>
                {drawerContent}
            </SwipeableDrawer>
        </>
    );
}

export default RenderMobileMenu;