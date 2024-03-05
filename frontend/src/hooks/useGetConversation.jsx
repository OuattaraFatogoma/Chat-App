import { useState } from "react";
import { useGlobalContext } from "../context";
import { enqueueSnackbar } from 'notistack';

const useGetConversation = () => {
    const [loading, setLoading] = useState(true);
    const [conversations, setConversations] = useState([]);
    const {user} = useGlobalContext();

    const getConversation = async () =>{
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/v1/users/");
            const data = await response.json();
            if(data.message) throw new Error(data.message);
            setConversations(data);
        } catch (error) {
            console.log(error.message);
            enqueueSnackbar(error.message, { variant: 'error' });
        }
        finally{
            setLoading(false);
        }
    }

    return {getConversation, loading, conversations}
}

export default useGetConversation;