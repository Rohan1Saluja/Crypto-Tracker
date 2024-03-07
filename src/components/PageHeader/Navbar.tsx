import * as React from "react";
import "./Navbar.scss";
import AppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Crypto Taxes", "Free Tools", "Resource Center"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const ResponsiveAppBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="fixed" className="app-bar">
      <div className="content">
        <div className="logo"></div>

        <div className="pages">
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
          <Button className="button">Get Started</Button>
        </div>
      </div>
    </AppBar>
  );
};
