import { IconButton, IconButtonProps, SxProps, Tooltip } from "@mui/material";
import styles from './MenuToggle.module.css';

interface MenuToggleProps extends IconButtonProps {
    open: boolean;
    onToggle: () => void;
    sx?: SxProps;
}

export default function MenuToggle({ open, onToggle, sx, ...props }: MenuToggleProps) {
    return (
        <Tooltip title="Menu">
            <IconButton
                className={`${styles.iconButtonBurger} ${open ? styles.open : ''}`}
                onClick={onToggle}
                {...props}
                sx={{ padding: '1.5rem', ...sx }}
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}

            >
                <span className={styles.burgerLine} />
                <span className={styles.burgerLine} />
                <span className={styles.burgerLine} />
            </IconButton>
        </Tooltip>
    );
}