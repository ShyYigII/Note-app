import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Avatar, Menu, MenuItem, Typography } from "@mui/material";
import {Box} from "@mui/material";
function UserMenu() {
    const {user : {displayName,photoURL , auth}}  = useContext(AuthContext)
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleLogout = ()=>{
        auth.signOut();
    }

    const handleClose = ()=>{
        setAnchorEl(null)
    }

    const handleClick = (e)=>{
        setAnchorEl(e.currentTarget);
    }

    return (  
        <>
        <Box sx={{display:'flex'}} onClick={handleClick}>
            <Typography>{displayName}</Typography>
            <Avatar  src={photoURL} alt="avatar" sx={{width: 24, height: 24, ml: '5px'}}/>
        </Box>
        
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
        </>


    );
}

export default UserMenu;