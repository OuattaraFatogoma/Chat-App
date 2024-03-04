import { createContext, useContext, useEffect, useState } from "react";

const ContextApi = createContext();

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    return(
        <ContextApi.Provider value={{user, setUser}}>
            {children}
        </ContextApi.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(ContextApi);
}

