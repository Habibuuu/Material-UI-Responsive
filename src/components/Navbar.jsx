import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { Mail, Airlines, Notifications } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor:"white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const IconsLeft = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px"
}));

const IconsRight = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}))

const Navbar = () => {
    const [ open, setOpen ] = useState(false);
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <IconsLeft>
                    <Airlines/>
                    <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" }}}>
                            Bibuuu
                    </Typography>
                </IconsLeft>
                <Search><InputBase placeholder="Search...."/></Search>
                <IconsRight>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{width: "30px", height: "30px"}}
                            src="https://avatars.githubusercontent.com/u/53551336?v=4"
                            onClick={(e) => setOpen(true)}
                            />
                </IconsRight>
                <UserBox>
                    <Avatar sx={{width: "30px", height: "30px"}}
                            src="https://avatars.githubusercontent.com/u/53551336?v=4"
                            onClick={(e) => setOpen(true)}
                            />
                    <Typography variant="span" onClick={(e) => setOpen(true)}>Jhone</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}
 
export default Navbar;