import { useState } from "react";
import { useGlobalContext } from "../context";
import { enqueueSnackbar } from 'notistack';

const useGetReceiver = () => {
    const [loading, setLoading] = useState(true);
    const [receiver, setReceiver] = useState([]);

    const getReceiver = async (user_id) =>{
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/v1/users/"+user_id);
            const data = await response.json();
            if(data.message) throw new Error(data.message);
            setReceiver(data);
        } catch (error) {
            console.log(error.message);
            enqueueSnackbar(error.message, { variant: 'error' });
        }
        finally{
            setLoading(false);
        }
    }

    return {getReceiver, loading, receiver}
}

export default useGetReceiver;