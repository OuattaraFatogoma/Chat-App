import { useState } from "react";
import { useGlobalContext } from "../context";
import { enqueueSnackbar } from 'notistack';

const useGetMessages = () => {
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState([]);
    const {user} = useGlobalContext();

    const getMessages = async (user_id) =>{
        if(!user_id) return;
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/v1/messages/"+user_id, {
                mode: 'cors',
                credentials: 'include',
            });
            const data = await response.json();
            if(data.message) throw new Error(data.message);
            setMessages(data);
        } catch (error) {
            console.log(error.message);
            enqueueSnackbar(error.message, { variant: 'error' });
        }
        finally{
            setLoading(false);
        }
    }

    return {getMessages, loading, messages}
}

export default useGetMessages;