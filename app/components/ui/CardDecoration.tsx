import { cn } from "@/utils/cn";
import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";

interface CardDecorationProps extends BoxProps {
    children: ReactNode | ReactNode[];
}


export function CardDecoration({ children, className, ...props }: CardDecorationProps) {
    return (
        <Box position="relative" {...props}>
            <span className={cn('absolute -inset-x-3 -inset-y rounded-tr rounded-bl', className)} />
            {children}
        </Box>
    )
}