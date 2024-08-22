'use client'
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import { Box, IconButton, IconButtonProps } from "@mui/material";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

type ServiceCard = {
    imageUrl?: StaticImageData;
    title?: string;
    description?: string[];
    text?: string[];
};
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CardAccordionService({ card }: { card: ServiceCard }) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card component="article" sx={{ mb: 4 }}>
            <Image
                src={card.imageUrl ?? ""}
                alt={card.title ?? ""}
            />
            <Box display={"flex"} justifyContent={"space-between"}>
                <CardContent sx={{ pr: 0 }}>
                    <Typography variant="h6" color="text.primary" fontWeight={500} fontSize={18}>
                        {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {card.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {card.text?.map((text, index) => (
                        <Typography variant="body2" key={index} paragraph>
                            {text}
                        </Typography>
                    ))}
                </CardContent>
            </Collapse>
        </Card>
    );
}
