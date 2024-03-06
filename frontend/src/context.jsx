import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";


const ContextApi = createContext();

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [selectConversation, setSelectConversation] = useState(0);
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [messages, setMessages] = useState([]);


    useEffect(()=>{
        if(user){

            const socket = io("http://localhost:5000",{
                query: {
                  user_id: user.id,
                }
            });

            setSocket(socket);

            socket.on("getOnlineUsers", (data) =>{
                setOnlineUsers(data);
            })

        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    }, [user])

    
    return(
        <ContextApi.Provider 
        value={{
                user, setUser, 
                selectConversation, setSelectConversation,
                socket, onlineUsers,
                messages, setMessages
            }}
        >
            {children}
        </ContextApi.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(ContextApi);
}

