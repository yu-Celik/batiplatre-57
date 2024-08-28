import { Box } from '@mui/material';

const GoogleMapComponent = () => {
    return (
        <Box sx={{ height: 400, width: '100%', mb: 4, position: 'relative' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.2681166041416!2d6.185661776575288!3d49.11918777125604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794dc7a1b5e3d4d%3A0x3b6e5a8c6a4e71b0!2s3%20Rue%20Louis%20Hestaux%2C%2057070%20Metz!5e0!3m2!1sfr!2sfr!4v1682524500000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </Box>
    );
};

export default GoogleMapComponent;