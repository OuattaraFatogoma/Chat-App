import { createContext, useContext, useEffect, useState } from "react";

const ContextApi = createContext();

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [selectConversation, setSelectConversation] = useState(0);

    return(
        <ContextApi.Provider value={{user, setUser, selectConversation, setSelectConversation}}>
            {children}
        </ContextApi.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(ContextApi);
}

