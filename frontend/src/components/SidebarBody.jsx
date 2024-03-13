import React, { useEffect, useState } from 'react';
import { List, Divider } from '@mui/material';
import ConversationCard from './ConversationCard';
import useGetConversation from '../hooks/useGetConversation';
import { useGlobalContext } from '../context';

function SidebarBody() {
  const {conversations, loading, getConversation} = useGetConversation();
  const {onlineUsers, searchTerm} = useGlobalContext();
  const [conversationSearch, setConversationSearch] = useState([]);

  useEffect(()=>{
    getConversation();
  }, []);

  useEffect(() => {
    if(searchTerm) {
      setConversationSearch(conversations.filter(conversation => conversation.username.toLowerCase().includes(searchTerm.toLowerCase())));
    }
    else setConversationSearch(conversations);
    console.log(conversationSearch)
    
  }, [searchTerm, conversations])

  if(loading) return "Loading...";

  return (
    <div>
      <List>
        {
          conversationSearch.map( (conversation,index) => {
            const {username, profilePicture, user_id} = conversation;
            return(
            <React.Fragment key={index}>
              <ConversationCard name={username} online={onlineUsers.find(id => id==user_id)} profilePicture={profilePicture} id={user_id}/>
              {index===conversations.length-1 || <Divider/>}
            </React.Fragment>
          )})
        }
      </List>
    </div>
  )
}

export default SidebarBody