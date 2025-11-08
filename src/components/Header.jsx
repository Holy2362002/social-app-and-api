import {
   Box, AppBar,Toolbar,Typography,Badge,IconButton
} from "@mui/material"
import { DarkMode as DarkIcon, LightMode as LightIcon , Menu as MenuIcon , ArrowBack as BackIcon} from "@mui/icons-material"
import { useApp } from "../AppProvider"
import { useLocation , useNavigate} from "react-router";
export default function Header({count}) {

    const {mode, setMode} = useApp();
    const {setDrawer} = useApp();
    const {pathname} = useLocation();
    const navigate = useNavigate();

    return <AppBar position="static">
        <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
        <Box>
         {pathname == "/" ? (
            <IconButton color="inherit" onClick={() => setDrawer(true)}>
            <MenuIcon/>
            
        </IconButton>   
         ) : (
            <IconButton color="inherit" onClick={() => navigate("/")}>
            <BackIcon/>
            
        </IconButton>   
         )}   
        <Badge badgeContent={count} color="error">
        <Typography>Social</Typography>
        </Badge>
        </Box>

        {mode == "dark" ? (
            <IconButton onClick={() => setMode("light")}>
                <LightIcon/></IconButton>
        ) : (
            <IconButton onClick={() => setMode("dark")}><DarkIcon/></IconButton>
        )}

        </Toolbar>
    </AppBar>
}