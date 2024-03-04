import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { useGlobalContext } from '../context';
import { useNavigate } from 'react-router-dom';


const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const {setUser} = useGlobalContext();
    const navigate = useNavigate();

    const register = async (username, password, confirmPassword, gender) => {
        const success = handleLoginValidation(username, password, confirmPassword, gender);
        
        if(!success) return;

        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/v1/auth/register",{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password, confirmPassword, gender}),
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

    return {register, loading};
}

export default useRegister;

function handleLoginValidation(username, password, confirmPassword, gender) {
    if((!username || !password || !confirmPassword || !gender)) {
        enqueueSnackbar("Please fill all the fields", { variant: 'error' });
    return false;
    }else if(confirmPassword  !== password) {
        enqueueSnackbar("Password and Confirm Password are different", { variant: 'error' });
        return false;
    }
    return true;
}
