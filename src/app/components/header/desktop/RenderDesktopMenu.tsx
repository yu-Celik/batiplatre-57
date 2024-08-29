'use client'

import { Box, Button, Menu, MenuItem, Divider, Grid, Typography } from "@mui/material";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { servicesData } from '@/app/data/servicesData';
import villa from '/public/villa.png';
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const menuItems = [
    { text: 'Accueil', link: '/' },
    {
        text: 'Services',
        link: '/nos-services',
        subItems: servicesData.map(service => ({
            id: service.id,
            text: service.titleH1,
            link: `/services/${service.id}`,
            image: service.image
        }))
    },
    { text: 'Processus', link: '/processus-realisation' },
    { text: 'Réalisations', link: '/nos-realisations' },
    { text: 'À propos', link: '/qui-sommes-nous' },
    { text: 'Zones d\'intervention', link: '/zones-interventions' },
    { text: 'Contact', link: '/contact' },
];

function RenderDesktopMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isSubMenuHovered, setIsSubMenuHovered] = useState<string | null>(null);
    const pathname = usePathname();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMouseEnter = (id: string) => {
        setIsSubMenuHovered(id);
    };

    const handleMouseLeave = () => {
        setIsSubMenuHovered(null);
    };

    useEffect(() => {
        console.log(isSubMenuHovered);
    }, [isSubMenuHovered]);



    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {menuItems.map((item) => (
                <Box key={item.text} gap={2}>
                    {item.subItems ? (
                        <>
                            <Button
                                onClick={handleClick}
                                variant="text"
                                sx={{
                                    color: pathname === item.link ? 'primary.main' : 'text.primary',
                                    '&:hover': {
                                        color: 'primary.main',
                                    },
                                    px: 1.5
                                }}
                                {...(anchorEl && {
                                    'aria-controls': 'simple-menu',
                                    'aria-haspopup': 'true',
                                    'aria-expanded': Boolean(anchorEl)
                                })}
                                endIcon={
                                    Boolean(anchorEl) ? <KeyboardArrowUp /> : <KeyboardArrowDown />
                                }
                            >
                                {item.text}
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                PaperProps={{
                                    style: {
                                        maxWidth: '100%',
                                        width: '80vw',
                                    },
                                }}
                                sx={{
                                    '& .MuiList-root': {
                                        pb: 0,
                                    },
                                }}
                            >
                                <Grid container spacing={2} sx={{ p: 2 }}>
                                    {item.subItems.map((subItem, index) => (
                                        <Grid item key={subItem.text} xs={12} sm={6} md={4} display="flex">
                                            <MenuItem
                                                onClick={handleClose}
                                                component={Link}
                                                href={subItem.link}
                                                onMouseEnter={() => handleMouseEnter(subItem.id)}
                                                onMouseLeave={handleMouseLeave}
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                    p: 2,
                                                    flexGrow: 1,
                                                    borderRadius: 'var(--mui-shape-borderRadius)',
                                                }}
                                            >
                                                <Image
                                                    src={villa}
                                                    alt={subItem.text}
                                                    width={150}
                                                    height={100}
                                                    objectFit="cover"
                                                    style={{ borderRadius: 'var(--mui-shape-borderRadius)' }}
                                                />
                                                <Typography variant="body1" variantMapping={{ body1: 'h6' }} sx={{
                                                    mt: 1,
                                                    color: pathname === subItem.link || isSubMenuHovered === subItem.id ? 'primary.main' : 'text.primary',
                                                    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                }}>
                                                    {subItem.text}
                                                </Typography>
                                            </MenuItem>
                                            {index < item.subItems.length - 1 && (
                                                <Divider sx={{ borderWidth: '0.5px', height: '100%', ml: 2 }} />
                                            )}
                                        </Grid>
                                    ))}
                                </Grid>
                                <Divider />
                                <MenuItem
                                    onClick={handleClose}
                                    component={Link}
                                    href="/nos-services"
                                    sx={{
                                        justifyContent: 'center',
                                        p: 2,
                                        transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                        '&:hover': {
                                            color: 'primary.main',
                                        },
                                    }}
                                >
                                    Toutes nos prestations
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <Button
                            component={Link}
                            href={item.link}
                            variant="text"
                            sx={{
                                color: pathname === item.link ? 'primary.main' : 'text.primary',
                                px: 1.5,
                                '&:hover': {
                                    color: 'primary.main',
                                },
                            }}
                        >
                            {item.text}
                        </Button>
                    )}
                </Box>
            ))}
        </Box>
    );
}

export default RenderDesktopMenu;