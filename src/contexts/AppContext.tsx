import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from 'universal-cookie';
import { customHeader, token } from "../utils/token.utils";

export const AppContext = createContext<any>([]);

const AppContextContainer = ({ children }: { children: any }) => {
    const cookie = new Cookies();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = cookie.get("token");
        if (!token) {
            navigate('/login');
        }
    }, [])

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextContainer;