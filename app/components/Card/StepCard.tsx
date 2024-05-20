import { cn } from "@/utils/cn";
import { Card, CardContent, SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

type StepCardProps = {
    title: string | ReactNode;
    description: string | ReactNode;
    className?: string,
    sxDescriptions?: SxProps
};

export default function StepCard({ title, description, className, sxDescriptions }: StepCardProps) {
    return (
        <Card raised sx={{ my: 1 }}>
            <CardContent>
                <Typography variant="h6" pb={1} className={cn(className)}>{title}</Typography>
                <Typography variant="body2" sx={sxDescriptions} fontSize={{ sm: '1rem' }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}