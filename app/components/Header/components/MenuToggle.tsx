import { IconButton, IconButtonProps, Tooltip, Typography, styled } from "@mui/material";
import type {} from '@mui/material/themeCssVarsAugmentation';

interface IconButtonBurgerProps extends IconButtonProps {
    buttonClicked: boolean;
}


const IconButtonBurgerStyled = styled(IconButton, { shouldForwardProp: (prop) => prop !== 'buttonClicked', })<IconButtonBurgerProps>(({ buttonClicked }) => ({
    color: 'var(--mui-palette-grey-200)',
    '&.MuiButtonBase-root': {
        display: 'flex',
        padding: '1.5rem',
    },
    '& .MuiTypography-root': {
        position: 'absolute',
        transform: 'translateX(-50%)',
        width: '1.5rem',
        height: '0.10rem',
        borderRadius: 1,
        transition: 'transform 0.2s ease-out',
        backgroundColor: 'var(--mui-palette-text-primary)',
        '&:nth-of-type(1)': {
            transform: buttonClicked ? 'translateY(0rem) rotate(-135deg)' : 'translateY(0.375rem) rotate(0)'

        },
        '&:nth-of-type(2)': {
            transform: 'translateY(0)',
            opacity: buttonClicked ? '0%' : '100%'

        },
        '&:nth-of-type(3)': {
            transform: buttonClicked ? 'translateY(0rem) rotate(135deg)' : 'translateY(-0.375rem) rotate(0)'
        }

    }
}));



export default function MenuToggle({ open, ...props }: { open: boolean } & IconButtonProps) {

    return (
        <Tooltip title="Menu">
            <IconButtonBurgerStyled
                buttonClicked={open}
                {...props}
            >
                <Typography />
                <Typography />
                <Typography />
            </IconButtonBurgerStyled>
        </Tooltip>
    )
}
