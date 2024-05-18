import { SxProps, Theme, Typography, TypographyProps } from "@mui/material";

export const TextDecoration: React.FC<{ text: string | React.ReactNode, variant: TypographyProps['variant'], styles?: SxProps<Theme> }> = ({ text, variant, styles }) => {

    return (
        <div className="flex justify-center items-center relative">
            <Typography
                variant={variant}
                textAlign={'center'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                lineHeight={1.25}
                sx={{
                    height: '100px',
                    maxWidth: { xs: '24rem', sm: '24rem', md: '100%' },
                    position: 'relative',
                    zIndex: 1,
                    ...styles,
                    '&::before': {
                        content: '""',
                        backgroundImage: `linear-gradient(-45deg, var(--mui-palette-secondary-dark), var(--mui-palette-secondary-main))`,
                        borderRadius: '20px',
                        width: '85%',
                        height: '100%',
                        rotate: { xs: '.1deg', sm: '-.1deg' },
                        position: 'absolute',
                        top: 0,
                        left: { xs: '55%', sm: '35%' },
                        transform: 'translateX(-50%)',
                        zIndex: -1,
                        backgroundSize: '400% auto',
                        boxShadow: 'var(--mui-shadows-5)',
                    },
                    '&::after': {
                        content: '""',
                        borderRadius: '20px',
                        backgroundColor: 'var(--mui-palette-background-default)',
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: { xs: '45%', sm: '45%' },
                        transform: 'translateX(-50%)',
                        zIndex: -1,

                    }
                }}>
                {text}
            </Typography>
        </div>
    );
};


