import {
    Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box
} from "@mui/material"

import { Home as HomeIcon, Person as PersonIcon, Login as LoginIcon ,Logout as LogoutIcon,
    PersonAdd as PersonAddIcon,
    Height
} from "@mui/icons-material"
import { grey } from "@mui/material/colors"

import { useApp } from "../AppProvider"
import { useNavigate } from "react-router"

export default function AppDrawer() {
    const navigate = useNavigate();
    const {drawer, setDrawer} = useApp();
    const {user, setUser} = useApp();
    return <Drawer open={drawer} onClose={() => setDrawer(false)} onClick={() => setDrawer(false)}>
        <Box sx = {{height : 200 , width : 300 , background : grey[500]}}></Box>
        <List>
            {user && (
                <>
                
            <ListItem button>
                <ListItemIcon><PersonIcon/></ListItemIcon>
                <ListItemText primary="Profile"/>
            </ListItem>
            <ListItem button onClick={() => {setUser(undefined); localStorage.removeItem("token")}}>
                <ListItemIcon><LogoutIcon/></ListItemIcon>
                <ListItemText primary="Logout"/>
            </ListItem>
                </>
                
            )}
            <Divider/>
            {!user && 
            
            <>
            <ListItem button onClick={() => navigate("/")}>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary="Home"/>
            </ListItem>
            <ListItem button onClick={() => navigate("/Login")}>
                <ListItemIcon><LoginIcon/></ListItemIcon>
                <ListItemText primary="Login"/>
            </ListItem>
            <ListItem button onClick={() => navigate("/Register")}>
                <ListItemIcon><PersonAddIcon/></ListItemIcon>
                <ListItemText primary="Register"/>
            </ListItem>
            </>}
            
        </List>

    </Drawer>
}