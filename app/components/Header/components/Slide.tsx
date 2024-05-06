'use client'
import { useScrollTrigger, Slide } from "@mui/material";

function HideOnScroll(props: any) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default HideOnScroll;

