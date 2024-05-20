import { Container, Typography, Box } from "@mui/material";

export default function DetailedService({ id, title, description }: { id: string, title: string, description: string }) {
    return (
        <Container id={id}>
            <Typography variant="h3" fontSize={28} gutterBottom>
                {title}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'start', my: 1.25, mb: 3 }}>
                <Box sx={{ width: '30%', height: '4px', backgroundColor: 'secondary.main', mb: 1 }}></Box>
                <Box sx={{ width: '10%', height: '4px', backgroundColor: 'secondary.main', mb: 1, ml: 1 }}></Box>
                <Box sx={{ width: '5%', height: '4px', backgroundColor: 'secondary.main', mb: 1, ml: 1 }}></Box>
                <Box sx={{ width: '2%', height: '4px', backgroundColor: 'secondary.main', mb: 1, ml: 1 }}></Box>
            </Box>
            <Typography variant="body1" gutterBottom>
                {description}
            </Typography>
        </Container>
    );
}