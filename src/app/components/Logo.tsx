import { SvgIcon, type SvgIconProps, Typography } from '@mui/material';
import Link from 'next/link';

type LogoProps = SvgIconProps & {
    displayText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ id, displayText = true, ...props }: LogoProps): JSX.Element => {

    return (
        <Link
            aria-controls="header"
            aria-label="Logo Bati Plâtre 57"
            href="/"
            className='flex items-center relative gap-2 sm:justify-center md:justify-start'
            style={{
                width: 'auto',
                height: '100%',
                textDecoration: 'none',
            }}
        >
            <SvgIcon {...props}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Logo BatiPlatre57</title>
                    <path d="M0 18.185L24.1048 0L30.6026 4.86344L0 28.1233V18.185Z" fill={`var(--mui-palette-secondary-main)`} />
                    <path d="M0 33.1977L33.9563 7.40039L40.4541 12.2638L7.96506 37.0039V47.9995H0V33.1977Z" fill={`var(--mui-palette-secondary-main)`} />
                    <path d="M11.9492 39.9648H39.8269V22.2026L37.1021 20.0881L43.8095 14.8018L48.0016 17.9736V48H11.9492V39.9648Z" fill={`var(--mui-palette-primary-main)`} />
                </svg>
            </SvgIcon>
            {displayText && (
                <Typography
                    variant="h3"
                >
                    Bâti Plâtre 57
                </Typography>
            )}
        </Link >
    );
};

export default Logo;