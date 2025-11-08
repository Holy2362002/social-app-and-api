import { createContext, useContext, useState , useMemo,useEffect} from "react";

 

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CssBaseline } from "@mui/material";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();


const AppContext = createContext();

 const api = "http://localhost:8800";

export default function AppProvider({ children }) {

    const [mode, setMode] = useState("dark");
    const [drawer, setDrawer] = useState(false);
    const [user, setUser] = useState();

    useEffect(() => {
        fetch(`${api}/users/verify`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }).then(async res => {
            const verifyUser = res.json();
            setUser(verifyUser);
        })
    }, [])
    const theme = useMemo(() => {
        return createTheme({

        palette: {

            mode: mode,

        },

    });
    },[mode])

 

    return (

        <AppContext.Provider value={{ mode, setMode, drawer, setDrawer , user, setUser}}>

            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>

                {children}

                <CssBaseline />

            </ThemeProvider>
            </QueryClientProvider>

        </AppContext.Provider>

    );

}

 

export function useApp() {

    return useContext(AppContext);

}