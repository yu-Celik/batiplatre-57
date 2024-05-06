import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";

interface CardDecorationProps extends BoxProps {
    children: ReactNode;
    height: string;
    width: string;
}

export function LeftCardDecoration({ children, height, width, ...props }: CardDecorationProps) {
    return (
        <Box position="relative" {...props}>
            <span
                className="bg-amber-500 dark:bg-amber-600 absolute -inset-x-3 -inset-y"
                style={{ height: `${height}`, width: `${width}`, borderRadius: '10px 0 10px 0px', zIndex: -10 }}></span>
            {children}
        </Box>
    )
}
export function RightCardDecoration({ children, height, width, ...props }: CardDecorationProps) {
    return (
        <Box position="relative" {...props}>
            <span
                className="bg-amber-500 dark:bg-amber-600 absolute -inset-x-3 -inset-y"
                style={{ height: `${height}`, width: `${width}`, borderRadius: '0px 10px 0px 10px', zIndex: -10 }}></span>
            {children}
        </Box>
    )
}