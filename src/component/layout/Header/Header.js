import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import './Header.css'
const Header = () => {
    //   const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [drawer, setDrawer] = React.useState(false);

    const navigate = useNavigate();

    //   const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    //   };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    //   const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    //   };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const toggleDrawer = () => {
        setDrawer(!drawer);
    }

    const menuNavigation = (e) => {
        console.log("eeeeee", e);
        switch (e) {
            case "Home":
                navigate('/')
                setDrawer(false)
                break;
            case "Product":
                navigate('/')
                setDrawer(false)
                break;
            case "Contact":
                navigate('/')
                setDrawer(false)
                break;
            case "About":
                navigate('/')
                setDrawer(false)
                break;
            default:
                setDrawer(false)
                break;
        }
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xxl" >
                <Toolbar disableGutters >
                    <div style={{ display: 'flex', cursor: 'pointer' }}>
                        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            // href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                            onClick={() => navigate('/')}
                        >
                            LOGO1
                        </Typography>
                    </div>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        <Button onClick={() => navigate('/')}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            Home
                        </Button>
                        <Button onClick={() => navigate('/')}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            Product
                        </Button>
                        <Button onClick={() => navigate('/')}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            Contact
                        </Button>
                        <Button onClick={() => navigate('/')}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            About
                        </Button>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            //   onClick={handleOpenNavMenu}
                            onClick={() => toggleDrawer()}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer width={4000} open={drawer} anchor="left"  >
                            <CloseIcon sx={{ cursor: "pointer" }} onClick={() => setDrawer(false)} style={{ alignSelf: "end", }} />
                            <div style={{ display: 'flex', justifyContent: 'center', width: '180px', paddingBottom: "20px", borderBottom: "1px solid #1976d2" }}>
                                <Avatar alt="P" /* src="" */ sx={{ cursor: "pointer", width: '80px', height: '80px' }} />
                            </div>
                            <MenuItem onClick={(e) => menuNavigation(e.target.innerText)}>Home</MenuItem>
                            <MenuItem onClick={(e) => menuNavigation(e.target.innerText)}>Product</MenuItem>
                            <MenuItem onClick={(e) => menuNavigation(e.target.innerText)}>Contact</MenuItem>
                            <MenuItem onClick={(e) => menuNavigation(e.target.innerText)}>About</MenuItem>
                        </Drawer>
                    </Box>
                    <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        }}
                        onClick={() => navigate('/')}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" /* src="/static/images/avatar/2.jpg" */ />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Hello</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">Hello</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
