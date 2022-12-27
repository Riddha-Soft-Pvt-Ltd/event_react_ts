import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from 'universal-cookie';

export const AppContext = createContext<any>([]);

const AppContextContainer = ({children}:{children:any}) => {
    const [createToken,setCreateToken] = useState('');
    const cookie = new Cookies();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        const IsLoggedIn = cookie.get("isLoggedIn" );
        if(!IsLoggedIn){
            navigate('/login');
        } else if( IsLoggedIn && location.pathname === "/login" ){
            navigate('/');
        }
        const token = cookie.get("token" );
        
        setCreateToken(token);
        if(!token){
            navigate('/login');
        }

    },[location])

   

return(
    <AppContext.Provider value={{}}>
        {children}
    </AppContext.Provider>
)
}
export default AppContextContainer;