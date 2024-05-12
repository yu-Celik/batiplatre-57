'use client'
import { heightHeader } from '@/libs/theme';
import { SvgIcon, useTheme, type SvgIconProps, Typography } from '@mui/material';
import Link from 'next/link';

const LogoBatiPlatre: React.FC<SvgIconProps> = ({ id, ...props }: SvgIconProps): JSX.Element => {
    const theme = useTheme();

    return (
        <Link
            aria-controls="header"
            aria-label="Logo Bati Plâtre 57"
            href="/accueil"
            className='flex items-center relative sm:justify-center md:justify-start'
            style={{
                width: 'auto',
                height: heightHeader,
            }}
        >
            <SvgIcon {...props} >
                <svg width="499" height="499" viewBox="0 0 499 499" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Logo BatiPlatre57</title>
                    <path d="M249.395 -0.000235324L374.092 124.697L368.007 130.782L249.395 12.1702L12.1703 249.394L249.395 486.619L368.007 368.007L374.092 374.092L249.395 498.789L-0.000117662 249.394L249.395 -0.000235324Z" fill={`url(#paint0_linear_${id})`} />
                    <path d="M199 357.785H245.454C274.875 357.785 298.102 349.105 298.102 308.234V283.459C298.102 259.62 290.359 248.781 277.972 244.136C288.485 238.553 295.005 227.714 295.005 206.035V190.551C295.005 149.068 271.778 141 242.357 141H199V357.785ZM220.678 339.203V252.489H245.454C264.361 252.489 276.423 258.357 276.423 289.652V305.137C276.423 333.335 264.361 339.203 245.454 339.203H220.678ZM220.678 237.005V159.582H242.357C261.264 159.582 273.326 165.449 273.326 193.648V202.939C273.326 231.137 261.264 237.005 242.357 237.005H220.678Z" fill={`url(#paint1_linear_${id})`} />
                    <defs>
                        <linearGradient id={`paint0_linear_${id}`} x1="124.697" y1="374.092" x2="374.092" y2="124.697" gradientUnits="userSpaceOnUse">
                            <stop stopColor={theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary.main} />
                            {/* <stop offset="1" stopColor="#FFC107" /> */}
                        </linearGradient>
                        <linearGradient id={`paint1_linear_${id}`} x1="246.228" y1="85.5217" x2="246.228" y2="435.474" gradientUnits="userSpaceOnUse">
                            <stop stopColor={theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary.main} />
                            {/* <stop offset="1" stopColor="#FFC107" /> */}
                        </linearGradient>
                    </defs>
                </svg>
            </SvgIcon>
            <Typography
                variant="body1"
                variantMapping={{ body1: 'h6' }}
                noWrap
                aria-label="Logo Bati Plâtre 57"
                aria-controls="header"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 400,
                    letterSpacing: '.1rem',
                    color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary.main,
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    transform: 'translateX(-10%)',
                    textTransform: 'uppercase',
                }}
            >
                ati Plâtre 57
            </Typography>

        </Link>
    );
};

export default LogoBatiPlatre;