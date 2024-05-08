import { useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { Box, Button, MenuItem, useTheme } from "@mui/material";
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
    const theme = useTheme();
    const location = usePathname();

    return (
        <nav ref={scope} aria-label={ariaLabelNav} role="navigation">
            <Button
                component={motion.button}
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
                    color: isOpen ? theme.palette.primary.main : theme.palette.text.primary
                }}
            >
                {title}
            </Button>
            <Box
                id={ariaControlButton}
                component={motion.ul}
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
                    backgroundColor: theme.palette.background.default,
                    boxShadow: theme.shadows[1],
                    padding: theme.spacing(1),
                    flexDirection: 'row',
                    gap: theme.spacing(1),
                    '& .MuiMenuItem-root': {
                        padding: theme.spacing(1),
                        width: "max-content",
                        position: 'relative',
                        '&:hover': {
                            color: theme.palette.primary.main,
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                display: 'block',
                                height: '2px',
                                width: '100%',
                                backgroundColor: theme.palette.primary.main
                            },
                        }
                    }
                }}
                aria-label={ariaLabelNav}
                aria-labelledby={labelledby}
            >
                {pages.map((page) => (
                    <Link key={page.path} href={page.path} aria-label={page.title}>
                        <MenuItem sx={{
                            color: theme.palette.text.primary,
                            ...(location === page.path && {
                                color: theme.palette.primary.main,
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    display: 'block',
                                    height: '2px',
                                    width: '100%',
                                    background: theme.palette.primary.main
                                }
                            }),
                        }}>
                            {page.title}
                        </MenuItem>
                    </Link>
                ))}
            </Box>
        </nav>
    );
}

export default MenuAnimate;

