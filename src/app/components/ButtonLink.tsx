"use client";
import { Button, ButtonProps } from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {
    link: string;
} & ButtonProps;

function ButtonLink({ link, children, ...props }: Props) {
    const router = useRouter();
    const handleClick = () => {
        router.push(link);
    };
    return (
        <Button
            onClick={handleClick}
            {...props}
        >
            {children}
        </Button>
    );
}

export default ButtonLink;