import { enqueueSnackbar } from 'notistack';

const useSendMessage = () => {

    const sendMessage = async (receiverId, text) => {
        if(!text) return;
        try {
            const response = await fetch("http://localhost:5000/api/v1/messages/send/"+ receiverId,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({text}),
                mode: 'cors',
                credentials: 'include',
            });
            const data = await response.json();
            if(data.message) throw new Error(data.message);
        } catch (error) {
            console.log(error.message);
            enqueueSnackbar(error.message, { variant: 'error' });
        }
        
    }

    return {sendMessage};
}

export default useSendMessage;

