'use client'
import { useEffect } from "react";
import { useAnimate, stagger, LazyMotion, m } from "framer-motion";
import { Box, Button, MenuItem } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import Link from 'next/link';
import { usePathname } from "next/navigation";

const staggerMenuItems = stagger(0.05, { startDelay: 0.05 });

function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(".arrow", { rotate: isOpen ? -180 : 0 }, { duration: 0.2 });

        animate(
            "ul",
            {
                clipPath: isOpen
                    ? "inset(0% 0% 0% 0% round 5px)"
                    : "inset(10% 50% 100% 50% round 5px)",
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.1,
            }
        );

        animate(
            "li",
            isOpen
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
            {
                duration: 0.1,
                delay: isOpen ? staggerMenuItems : 0,
            }
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    return scope;
}
type MenuAnimateProps = {
    isOpen: boolean;
    pages: { path: string; title: string }[];
    title: string;
    ariaLabelNav: string;
    ariaControlButton: string;
    labelledby: string;
    onMouseEnter: (event: React.MouseEvent<HTMLElement>) => void;
    onMouseLeave: (event: React.MouseEvent<HTMLElement>) => void;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const MenuAnimate: React.FC<MenuAnimateProps> = ({ isOpen, pages, title, ariaLabelNav, ariaControlButton, labelledby, onMouseEnter, onMouseLeave, onClick }) => {
    const scope = useMenuAnimation(isOpen);
    const location = usePathname();
    const loadFeatures = () => import('@/components/motion/features').then((res) => res.default)

    return (
        <LazyMotion features={loadFeatures}>
            <nav ref={scope} aria-label={ariaLabelNav} role="navigation">
                <Button
                    component={m.button}
                    whileTap={{ scale: 0.97 }}
                    aria-haspopup="true"
                    aria-expanded={isOpen ? 'true' : 'false'}
                    aria-controls={isOpen ? ariaControlButton : undefined}
                    aria-label={ariaLabelNav}
                    id={labelledby}
                    endIcon={<KeyboardArrowDown className="arrow" />}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={onClick}
                    sx={{
                        color: isOpen ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-text-primary)'
                    }}
                >
                    {title}
                </Button>
                <Box
                    id={ariaControlButton}
                    component={m.ul}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    display="flex"
                    flexDirection="row"
                    sx={{
                        pointerEvents: isOpen ? "auto" : "none",
                        clipPath: "inset(10% 50% 100% 50% round 10px)",
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        margin: "0 auto",
                        backgroundColor: 'var(--mui-palette-background-paper)',
                        boxShadow: 'var(--mui-shadows-24)',
                        padding: '0.5rem',
                        flexDirection: 'row',
                        gap: '0.5rem',
                        '& .MuiMenuItem-root': {
                            padding: '0.5rem',
                            width: "max-content",
                            position: 'relative',
                            '&:hover': {
                                color: 'var(--mui-palette-primary-main)',
                            },
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                bottom: -5,
                                width: '100%',
                                height: 2,
                                background: 'var(--mui-palette-primary-main)',
                                transform: 'scaleX(0)',
                                transformOrigin: 'right',
                                transition: 'transform 0.3s ease',
                            },
                            '&:hover::after': {
                                transform: 'scaleX(1)',
                                transformOrigin: 'left',
                            }
                        }
                    }}
                    aria-label={ariaLabelNav}
                    aria-labelledby={labelledby}
                >
                    {pages.map((page) => (
                        <Link key={page.path} href={page.path} aria-label={page.title} style={{ textDecoration: 'none' }}>
                            <MenuItem
                                sx={{
                                    color: 'var(--mui-palette-text-primary)',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                    ...(location === page.path && {
                                        color: 'var(--mui-palette-primary-main)',
                                    }),
                                }}>
                                {page.title}
                            </MenuItem>
                        </Link>
                    ))}

                </Box>
            </nav>
        </LazyMotion>
    );
}

export default MenuAnimate;

