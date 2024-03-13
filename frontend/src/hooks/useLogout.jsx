import { enqueueSnackbar } from 'notistack';
import { useGlobalContext } from '../context';


const useLogout = () => {
    const {setUser, setSelectConversation} = useGlobalContext();

    const logout = async () => {
        try {
            const response = await fetch("https://instachat-4s7y.onrender.com/api/v1/auth/logout",{
                method: 'POST',
            });
            
            localStorage.removeItem("user");
            setUser(null);
            setSelectConversation(0);
        } catch (error) {
            console.log(error.message);
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    }
    return {logout};
}

export default useLogout;
