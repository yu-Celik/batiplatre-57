import { Card, CardContent, Typography, Button, SxProps } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

type ServiceCardProps = {
    imageSrc: StaticImageData;
    imageAlt: string;
    title: string | ReactNode;
    description: string | ReactNode;
    buttonId: string;
    buttonText: string;
    buttonVariant?: "text" | "outlined" | "contained";
    buttonColor?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    buttonSx?: SxProps;
};

export default function ServiceCard({
    imageSrc,
    imageAlt,
    title,
    description,
    buttonId,
    buttonText,
    buttonVariant = "outlined",
    buttonColor = "primary",
    buttonSx = { mt: 2 },
}: ServiceCardProps) {
    return (
        <Card raised>
            <Image src={imageSrc} alt={imageAlt} priority={false} loading="lazy" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
            <CardContent>
                <Typography variant="h6" sx={{ marginBottom: 0.25 }}>{title}</Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
                <Button variant={buttonVariant} color={buttonColor} sx={buttonSx} id={buttonId} fullWidth>
                    {buttonText}
                </Button>
            </CardContent>
        </Card>
    );
}