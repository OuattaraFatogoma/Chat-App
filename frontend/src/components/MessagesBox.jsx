import React from 'react'
import MessagesBoxHeader from './MessagesBoxHeader'
import MessagesBoxBody from './MessagesBoxBody'
import MessagesBoxFooter from './MessagesBoxFooter'
import {Divider} from '@mui/material';
import {useGlobalContext} from '../context';
import DefaultMessageBox from './DefaultMessageBox';

function MessagesBox() {
  const {selectConversation, user} = useGlobalContext();

  if(selectConversation===0) return(<DefaultMessageBox user={user}/>);

  return (
    <div className='messageBox'>
      <MessagesBoxHeader name="martin" online/>
      <Divider/>
      <MessagesBoxBody/>
      <MessagesBoxFooter/>
    </div>
  )
}

export default MessagesBox