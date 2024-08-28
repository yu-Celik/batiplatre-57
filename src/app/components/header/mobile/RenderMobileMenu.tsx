'use client';

import { useState } from 'react';
import { SwipeableDrawer, List, ListItemButton, ListItemText, Box, Typography, Collapse } from "@mui/material";
import MenuToggle from "./MenuToggle/MenuToggle";
import Link from 'next/link';
import { servicesData } from '@/app/data/servicesData';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { usePathname } from 'next/navigation';

// Tableau d'objets pour les éléments du menu
const menuItems = [
    { text: 'Accueil', link: '/' },
    {
        text: 'Services',
        link: '/nos-services',
        subItems: servicesData.map(service => ({
            text: service.titleH1,
            link: `/services/${service.id}`,
            text2: 'Toutes nos prestations'
        }))
    },
    { text: 'Processus', link: '/processus-realisation' },
    { text: 'Réalisations', link: '/nos-realisations' },
    { text: 'À propos', link: '/qui-sommes-nous' },
    { text: 'Zones d\'intervention', link: '/zones-interventions' },
    { text: 'Contact', link: '/contact' },
];

function RenderMobileMenu() {
    const [open, setOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState('');
    const pathname = usePathname();

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleLinkClick = () => {
        setOpen(false);
    };

    const handleSubMenuClick = (text: string) => {
        setOpenSubMenu(openSubMenu === text ? '' : text);
    };

    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const drawerContent = (
        <List>
            {menuItems.map((item) => {
                const isActive = pathname === item.link || 
                    (item.subItems && item.subItems.some(subItem => pathname === subItem.link));
                return (
                    <Box key={item.text}>
                        <ListItemButton
                            component={item.subItems ? 'div' : Link}
                            href={item.subItems ? undefined : item.link}
                            onClick={item.subItems ? () => handleSubMenuClick(item.text) : handleLinkClick}
                            selected={isActive}
                            sx={{
                                backgroundColor: isActive ? 'action.selected' : 'inherit',
                                '&.Mui-selected': {
                                    backgroundColor: 'action.selected',
                                },
                                '&.Mui-selected:hover': {
                                    backgroundColor: 'action.selected',
                                },
                            }}
                        >
                            <ListItemText primary={item.text} />
                            {item.subItems && (openSubMenu === item.text ? <ExpandLess /> : <ExpandMore />)}
                        </ListItemButton>
                        {item.subItems && (
                            <Collapse in={openSubMenu === item.text} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item.subItems.map((subItem) => (
                                        <ListItemButton
                                            key={subItem.text}
                                            component={Link}
                                            href={subItem.link}
                                            onClick={handleLinkClick}
                                            sx={{ pl: 4 }}
                                            selected={pathname === subItem.link}
                                        >
                                            <ListItemText primary={subItem.text} />
                                        </ListItemButton>
                                    ))}
                                    <ListItemButton
                                        component={Link}
                                        href="/nos-services"
                                        onClick={handleLinkClick}
                                        sx={{ pl: 4 }}
                                        selected={pathname === '/nos-services'}
                                    >
                                        <ListItemText primary="Toutes nos prestations" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        )}
                    </Box>
                );
            })}
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