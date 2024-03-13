import { Avatar, Box } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import MessageContent from './MessageContent'
import useGetMessages from '../hooks/useGetMessages'
import { useGlobalContext } from '../context';
import {format} from 'date-fns';


function MessagesBoxBody({receiver, sender}) {
  const {getMessages, loading} = useGetMessages();
  const {messages} = useGlobalContext();
  const body = useRef(null);

  useEffect(()=>{
    if(body.current) body.current.scrollTo(0, body.current.scrollHeight);
  }, [messages])

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
    <Box className="MessagesBoxBody" ref={body}>
      {
        messages.map((message, index) =>{
          let isSender = false;
          let name = receiver.username;
          let profilePicture = receiver.profilePicture;
          let time = format(new Date(message.created_at), "MMM,d HH:mm");
          
          if(message.sender_id===sender.id) {
            isSender = true
            name = sender.username;
            profilePicture = sender.profilePicture;
          }

          return(
            <MessageContent key={index} time={time} name={name} isSender={isSender} text={message.message_text} profilePicture={profilePicture}/>
          )
        })
      }
    </Box>
  )
}

export default MessagesBoxBody