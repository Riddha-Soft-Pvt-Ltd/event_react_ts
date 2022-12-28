import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from 'universal-cookie';
import { clearToken } from "../utils/token.utils";

export const AppContext = createContext<any>([]);

const AppContextContainer = ({ children }: { children: any }) => {
    const [token, setToken] = useState(null);

    const cookie = new Cookies();
    const navigate = useNavigate();

    const location = useLocation();

    const adminLogout = () => {
        setToken(null);
        clearToken();
        navigate("/login");
    }

    useEffect(() => {
        const tokenData = cookie.get("token");
        if (!tokenData) {
            navigate('/login');
        }
        else {
            setToken(tokenData);
        }
    }, [])

    return (
        <AppContext.Provider value={{ token, setToken, adminLogout }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextContainer;