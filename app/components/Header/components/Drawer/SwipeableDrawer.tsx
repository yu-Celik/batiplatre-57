import MenuToggle from "components/Header/components/MenuToggle";
import { Navigation } from "components/Header/components/Drawer/Navigation";
import { Divider, SwipeableDrawer, Typography, styled } from "@mui/material";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.5, 2, 1.5, 3),
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
}));

export default function CustomSwipeableDrawer({ isOpen, toggleOpen, pages }: { isOpen: boolean, toggleOpen: () => void, pages: { path: string; label: string }[] }) {
    const handleClose = () => {
        toggleOpen();
        document.getElementById('main-navigation-button')?.focus();
    };
    const handleOpen = () => {
        toggleOpen();
        document.getElementById('drawer-navigation')?.focus();
    };

    return (
        <>
            <SwipeableDrawer
                role="navigation"
                component={'nav'}
                anchor="right"
                open={isOpen}
                onClose={handleClose}
                onOpen={handleOpen}
                sx={{
                    display: { xs: 'block', sm: 'none', md: 'none' },
                    "& .MuiDrawer-paper": {
                        width: '60%',
                        height: '100dvh',
                        overflow: 'hidden'

                    },
                    overflow: 'hidden'
                }}
                transitionDuration={{
                    enter: 300,
                    exit: 200
                }}
            >
                <DrawerHeader>
                    <Typography variant="h6">Menu</Typography>
                    <MenuToggle open={isOpen} onClick={handleOpen} aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"} sx={{ "&:focus-visible": { outline: "2px solid #000" } }} />
                </DrawerHeader>
                <Divider />
                <Navigation onClose={handleClose} isOpen={isOpen} pages={pages} />
            </SwipeableDrawer>
        </>
    )
}