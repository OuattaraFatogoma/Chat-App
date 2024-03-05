import React, { useEffect } from 'react'
import MessagesBoxHeader from './MessagesBoxHeader'
import MessagesBoxBody from './MessagesBoxBody'
import MessagesBoxFooter from './MessagesBoxFooter'
import {Divider} from '@mui/material';
import {useGlobalContext} from '../context';
import DefaultMessageBox from './DefaultMessageBox';
import useGetReceiver from '../hooks/useGetReceiver';

function MessagesBox() {
  const {selectConversation, user} = useGlobalContext();
  const {getReceiver, loading, receiver} = useGetReceiver();

  useEffect(()=>{
    if(selectConversation===0) return;
    getReceiver(selectConversation);
  }, [selectConversation])
  
  if(selectConversation===0) return(<DefaultMessageBox user={user}/>);

  return (
    <div className='messageBox'>
      <MessagesBoxHeader receiver={receiver} online={receiver.gender==="MALE"}/>
      <Divider/>
      <MessagesBoxBody/>
      <MessagesBoxFooter/>
    </div>
  )
}

export default MessagesBox