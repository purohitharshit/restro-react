import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyle.css";
import MenuIcon from "@mui/icons-material/Menu";
import RestroIcon from "../../images/restro.jpg";
import "../../styles/HomeStyles.css"

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuDrawerToggler = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    //here we directly return thre "Box" component using the () paranthesis inside function "drawer"
    <Box onClick={menuDrawerToggler} sx={{}}>
      <Box sx={{display:"flex",flexDirection:"row",fontSize:".4rem"}}>
        <img
          src={RestroIcon}
          alt="logo"
          height={"30"}
          width={"30"}
          style={{padding:"0",marginLeft:"1rem"}}
        />

        <Typography
          component={"div"}
          color={"goldenrod"}
          variant="h6"
          sx={{ flexGrow: 1,fontSize:"1.2rem",fontFamily:"serif",fontStyle:"oblique",fontWeight:"bold" }}
        >
          QuickBite Restaurant
        </Typography>
      </Box>

      <Divider />

      <ul className="mobile-navigation" style={{textAlign:"center"}}>
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/About"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/Menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/Contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{  display: { sm: "none" } }}
              onClick={menuDrawerToggler}
            >
              <MenuIcon />
            </IconButton>
            <img
              src={RestroIcon}
              alt="logo"
              height={"50"}
              width={"50"}
              style={{ borderRadius: "2rem", padding: ".5rem" }}
            />
            <Typography
              component={"div"}
              color={"goldenrod"}
              variant="h6"
              sx={{ flexGrow: 1, gap: "1rem",fontFamily:"revert-layer",fontStyle:"oblique",fontWeight:"bold" }}
            >
              QuickBite Restaurant
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block", fontFamily:"monospace" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/About"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/Menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/Contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={menuDrawerToggler}
            sx={{
              display: {
                xs: "block",
                sm: "none",
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "240px",
                },
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
        {/* this <Toolbar/> is to show the 'content' that was previouly hidden/overridden by the 'navbar' */}
      </Box>
    </>
  );
};

export default Header;
