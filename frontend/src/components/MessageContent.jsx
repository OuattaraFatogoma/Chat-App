import { Avatar, Box } from '@mui/material'
import React from 'react'

function MessageContent({name, isSender, text}) {
  return (
    <Box display="flex" flexDirection={isSender?"row-reverse":"row"} p="1rem" justifyContent={isSender?"end":"start"} alignItems="end" >
        <Avatar alt={name} src={"https://avatar.iran.liara.run/public/boy?username="+ name}/>
        <div className={isSender?"bubble right":"bubble left"}>
          <p className='messageText'>{text}</p>
          <span className='messageTime'>25 Jan, 9:45</span>
        </div>
      </Box>
  )
}

export default MessageContent