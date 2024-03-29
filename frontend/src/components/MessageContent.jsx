import { Avatar, Box } from '@mui/material'
import React from 'react'

function MessageContent({name, isSender, text, profilePicture, time}) {
  return (
    <Box display="flex" flexDirection={isSender?"row-reverse":"row"} p="1rem" justifyContent={isSender?"end":"start"} alignItems="end" >
        <Avatar alt={name} src={profilePicture}/>
        <div className={isSender?"bubble right":"bubble left"}>
          <p className='messageText'>{text}</p>
          <span className='messageTime'>{time}</span>
        </div>
      </Box>
  )
}

export default MessageContent