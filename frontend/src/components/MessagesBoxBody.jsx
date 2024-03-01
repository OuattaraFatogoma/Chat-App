import { Avatar, Box } from '@mui/material'
import React from 'react'
import MessageContent from './MessageContent'

function MessagesBoxBody() {
  return (
    <Box className="MessagesBoxBody">
      <MessageContent name="martin" isSender={false} text="Hey"/>
      <MessageContent name="Prince" isSender={true} text="Hey martin"/>
      <MessageContent name="martin" isSender={false} text="Hey"/>
      <MessageContent name="Prince" isSender={true} text="Hey martin"/>
      <MessageContent name="martin" isSender={false} text="Hey"/>
      <MessageContent name="Prince" isSender={true} text="Hey martin"/>
      <MessageContent name="martin" isSender={false} text="Hey"/>
      <MessageContent name="Prince" isSender={true} text="Hey martin"/>
      <MessageContent name="martin" isSender={false} text="Hey"/>
      <MessageContent name="Prince" isSender={true} text="Hey martin"/>
    </Box>
  )
}

export default MessagesBoxBody