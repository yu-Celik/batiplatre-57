'use client';

import { Button, ButtonProps } from "@mui/material";

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

interface ScrollButtonProps extends ButtonProps {
    id: string;
    children: React.ReactNode;
}

export default function ScrollButton({ id, children, ...props }: ScrollButtonProps) {
    return (
        <Button {...props} onClick={() => scrollToSection(id)}>
            {children}
        </Button>
    );
}