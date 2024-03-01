import React from 'react'
import MessagesBoxHeader from './MessagesBoxHeader'
import MessagesBoxBody from './MessagesBoxBody'
import MessagesBoxFooter from './MessagesBoxFooter'
import { Divider } from '@mui/material'

function MessagesBox() {
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