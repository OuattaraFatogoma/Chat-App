import {useEffect} from 'react'
import { useGlobalContext } from '../context';

const useListenMessages = () => {
    const {socket, messages, setMessages} = useGlobalContext();
    
    useEffect(() => {
        socket?.on("newMessage",(newMessage) => {
            setMessages(messages => [...messages, ...newMessage])
        })

        return () => socket?.off("newMessage");

    }, [socket, messages, setMessages]);
}

export default useListenMessages