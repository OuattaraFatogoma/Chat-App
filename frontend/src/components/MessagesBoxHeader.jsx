import {Avatar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

function MessagesBoxHeader({receiver, online}) {

  const {username, profilePicture} = receiver;
  return (
    <Toolbar>
      <Avatar alt={username} src={profilePicture}/>
      <Box ml="1rem">
        <Typography >{username}</Typography>
        <Typography  sx={{opacity:".5", fontSize:".7rem"}}>{online? "Connected":"Disconnected"}</Typography>
      </Box>
    </Toolbar>
  )
}

export default MessagesBoxHeader