import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Astro Shweta
        </Typography>
        <Box>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/about">
            About
          </Button>
          <Button color="inherit" component={Link} href="/packages">
            Packages
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
