import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo / App Name */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Asset Depreciation
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/assets">
            Assets
          </Button>
          <Button color="inherit" component={Link} to="/depreciation-schedule">
            Depreciation Schedule
          </Button>
          <Button color="inherit" component={Link} to="/journal-entries">
            Journal Entries
          </Button>
          <Button color="inherit" component={Link} to="/settings">
            Settings
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
