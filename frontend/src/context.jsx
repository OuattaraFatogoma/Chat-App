import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";


const ContextApi = createContext();

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [selectConversation, setSelectConversation] = useState(0);
    const [socket, setSocket] = useState(null);


    useEffect(()=>{
        if(user){
            console.log(user);
            const socket = io("http://localhost:5000",{
                query: {
                  user_id: user.id,
                }
            });
            
            setSocket(socket);

        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    }, [user])


    return(
        <ContextApi.Provider value={{user, setUser, selectConversation, setSelectConversation}}>
            {children}
        </ContextApi.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(ContextApi);
}

