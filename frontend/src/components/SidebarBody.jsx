import React, { useEffect, useState } from 'react';
import { List, Divider } from '@mui/material';
import ConversationCard from './ConversationCard';
import useGetConversation from '../hooks/useGetConversation';
import { useGlobalContext } from '../context';


function SidebarBody() {
  const {conversations, loading, getConversation} = useGetConversation();
  const {onlineUsers} = useGlobalContext();
  
  useEffect(()=>{
    getConversation();
  }, []);

  if(loading) return "Loading...";

  return (
    <div>
      <List>
        {
          conversations.map( (conversation,index) => {
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