'use client';

import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import { RestartAlt } from "@mui/icons-material";

export default function FormDialog({ handleReset }: { handleReset: () => void }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type="button" variant="outlined" color="secondary" onClick={handleClickOpen} sx={{ position: 'sticky', top: { xs: '2rem', sm: '8rem', md: '2rem' }, left: '100%', transform: 'translateY(100%)', zIndex: 1, minWidth: 'fit-content', padding: 1 }}>
                <RestartAlt />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirmer la réinitialisation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Êtes-vous sûr de vouloir réinitialiser le formulaire ? Toutes les données saisies seront perdues.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Annuler</Button>
                    <Button onClick={() => { handleReset(); handleClose(); }}>
                        Confirmer
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}