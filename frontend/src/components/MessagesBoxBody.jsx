import { Avatar, Box } from '@mui/material'
import React, { useEffect } from 'react'
import MessageContent from './MessageContent'
import useGetMessages from '../hooks/useGetMessages'

function MessagesBoxBody({receiver, sender}) {
  const {getMessages, loading, messages} = useGetMessages();

  useEffect(()=>{
    getMessages(receiver.user_id);

  }, [receiver]);
  
  if(loading) return "Loading...";
  
  if(messages.length===0) return (
    <Box className="MessagesBoxBody" textAlign="center">
      <h5>No messages yet</h5>
    </Box>
  )

  return (
    <Box className="MessagesBoxBody">
      {
        messages.map((message, index) =>{
          let isSender = false;
          let name = receiver.username;
          let profilePicture = receiver.profilePicture;
          
          if(message.sender_id===sender.id) {
            isSender = true
            name = sender.username;
            profilePicture = sender.profilePicture;
          }

          return(
            <MessageContent key={index} name={name} isSender={isSender} text={message.message_text} profilePicture={profilePicture}/>
          )
        })
      }
    </Box>
  )
}

export default MessagesBoxBody