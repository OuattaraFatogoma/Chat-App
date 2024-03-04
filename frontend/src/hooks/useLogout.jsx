import { enqueueSnackbar } from 'notistack';
import { useGlobalContext } from '../context';


const useLogout = () => {
    const {setUser} = useGlobalContext();

    const logout = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/v1/auth/logout",{
                method: 'POST',
            });
            
            localStorage.removeItem("user");
            setUser(null);
        } catch (error) {
            console.log(error.message);
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    }
    return {logout};
}

export default useLogout;
