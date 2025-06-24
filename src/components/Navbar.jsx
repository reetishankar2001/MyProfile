import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, Typography, Button, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Navbar.css";

export default function Navbar() {
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Resume", path: "/resume" },
    { label: "Skills", path: "/skills" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="navbar">
      <Toolbar className="toolbar">
        <Typography variant="h6" className="logo">
          <span className="logo-icon">✴</span> Portfolio
        </Typography>
        <Box className="nav-links">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              variant="contained"
              className="nav-btn"
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </div>
  );
}
