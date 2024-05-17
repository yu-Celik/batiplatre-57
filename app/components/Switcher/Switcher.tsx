"use client";
import { useTheme } from "next-themes";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { useState } from "react";
import { NightsStay, WbSunny } from "@mui/icons-material";

export default function ModeToggle() {
  const { setTheme } = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
    handleClose();
  };
  

  return (
    <div className="absolute top-0 right-0">
      <IconButton
        aria-label="Toggle theme"
        onClick={handleClick}
        size="large"
      >
        <WbSunny className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:" />
        <NightsStay className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => handleThemeChange("light")}>
          Light
        </MenuItem>
        <MenuItem onClick={() => handleThemeChange("dark")}>
          Dark
        </MenuItem>
        <MenuItem onClick={() => handleThemeChange("system")}>
          System
        </MenuItem>
      </Menu>
    </div>
  );
}