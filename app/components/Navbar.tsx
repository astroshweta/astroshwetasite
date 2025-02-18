"use client";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>AstroShweta</Typography>
        <Box>
          <Button color="inherit" component={Link} href="#home">Home</Button>
          <Button color="inherit" component={Link} href="#about">About</Button>
          <Button color="inherit" component={Link} href="#packages">Packages</Button>
          <Button color="inherit" component={Link} href="#contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
