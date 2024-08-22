"use client"
import { ArrowForwardIos } from "@mui/icons-material"
import { Button, SxProps } from "@mui/material"
import { useRouter } from "next/navigation"

type Props = {
    variant: "contained" | "outlined" | "text"
    color: "primary" | "secondary" | "success" | "error" | "info" | "warning"
    href: string
    text: string
    sx?: SxProps
}

function ButtonLink({ variant, color, href, text, sx }: Props) {
    const router = useRouter()
    const handleClick = () => {
        router.push(href)
    }
    return (
        <>
            <Button variant={variant} color={color} fullWidth sx={{ mt: 3, ...sx }} endIcon={<ArrowForwardIos />} onClick={handleClick}>
                {text}
            </Button>
        </>
    )
}

export default ButtonLink