import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { useGlobalContext } from '../context';
import { useNavigate } from 'react-router-dom';


const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setUser, user} = useGlobalContext();
    const navigate = useNavigate();

    const login = async (username, password) => {
        const success = handleLoginValidation(username, password);
        
        if(!success) return;

        setLoading(true);
        try {
            const response = await fetch("https://instachat-4s7y.onrender.com/api/v1/auth/login",{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password}),
                mode: 'cors',
                credentials: 'include',
            });

            const data = await response.json();
            if(data.message) throw new Error(data.message);
            localStorage.setItem("user", JSON.stringify(data));
            setUser(data);
        } catch (error) {
            console.log(error.message);
            enqueueSnackbar(error.message, { variant: 'error' });
        }
        finally{
            setLoading(false);
        }
        
        

    }

    return {login, loading};
}

export default useLogin;

function handleLoginValidation(username, password) {
    if((!username || !password)) {
        enqueueSnackbar("Please enter your username and password", { variant: 'error' });
    return false;
    }
    return true;
}
