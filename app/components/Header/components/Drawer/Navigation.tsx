'use client'
import { motion, useAnimation } from "framer-motion";
import { Link as MuiLink, MenuItem, useTheme, Menu } from "@mui/material";
import Link from "next/link";
import { ArrowBackIos } from "@mui/icons-material";
import { RefObject, createRef, useEffect, useRef } from "react";
import { cn } from "utils/cn";

export const Navigation = ({ isOpen, onClose, pages }: { isOpen: boolean; onClose: () => void; pages: { label: string; path: string }[] }) => {
    const controls = useAnimation();
    const ulRef = useRef<HTMLUListElement>(null);
    const liRefs = useRef(pages.map(() => createRef<HTMLLIElement>()));
    const theme = useTheme();

    useEffect(() => {
        const sequence = async () => {
            if (isOpen) {
                await controls.start({
                    clipPath: "inset(0% 0% 0% 0% round 5px)",
                    transition: { duration: 0.03 }
                });
                liRefs.current.forEach(async (ref, index) => {
                    await controls.start({
                        opacity: 1,
                        scale: 1,
                        transition: { delay: index * 0.01 }
                    });
                });
            } else {
                liRefs.current.forEach(async (ref, index) => {
                    await controls.start({
                        opacity: 0,
                        scale: 0.5,
                        transition: { delay: index * 0.01 }
                    });
                });
                await controls.start({
                    clipPath: "inset(10% 50% 100% 50% round 5px)",
                    transition: { duration: 0.03 }
                });
            }
        };

        sequence();
    }, [isOpen, controls]);

    return (
        <motion.ul 
        ref={ulRef} 
        className='flex flex-col p-4 gap-4'
        animate={controls}
        role="menu"
        aria-label="Menu de navigation"
        >
            
            {pages.map((page, index) => (
                <MenuItem
                    component={motion.li}
                    key={page.path}
                    ref={liRefs.current[index] as RefObject<HTMLLIElement>}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={controls}
                    onClick={onClose}
                    role="menuitem"
                    aria-label={page.label}
                    sx={{
                        padding: theme.spacing(1),
                        gap: 1,
                    }}
                >
                    <ArrowBackIos fontSize="small" />
                    <MuiLink
                        component={Link}
                        href={page.path}
                        underline="none"
                        color="inherit"
                        sx={{
                            whiteSpace: "wrap",
                            outline: "none"
                        }}
                    >
                        {page.label}
                    </MuiLink>
                </MenuItem>
            ))}
        </motion.ul>
    );
}