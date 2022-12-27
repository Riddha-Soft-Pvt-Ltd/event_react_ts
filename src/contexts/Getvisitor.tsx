
import {createContext, useContext, useEffect, useState} from 'react'
import axios from 'axios';

export const VisitorContext = createContext<any>([]);

const VisitorContextContainer = ({children}:{children:any}) =>{
    const [data,setData] = useState([]);
    const getVisitorData=async()=>{
           
            axios.get(toString(),)
            .then((resp)=>{
                
                setData(resp.data.data);
            })
            .catch((error) =>{
                console.log(error);
            })
           }
           useEffect(() => {
            getVisitorData();
        }, [])
           return(
            <VisitorContext.Provider value={{getVisitorData,data}}>
                {children}
            </VisitorContext.Provider>

           )
        } 
        export default VisitorContextContainer;