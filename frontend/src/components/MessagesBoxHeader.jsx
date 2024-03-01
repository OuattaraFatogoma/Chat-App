import {Avatar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

function MessagesBoxHeader({name, online}) {
  return (
    <Toolbar>
      <Avatar alt={name} src={"https://avatar.iran.liara.run/public/boy?username="+ name}/>
      <Box ml="1rem">
        <Typography >{name}</Typography>
        <Typography  sx={{opacity:".5", fontSize:".7rem"}}>{online? "Connected":"Disconnected"}</Typography>
      </Box>
    </Toolbar>
  )
}

export default MessagesBoxHeader