import {Avatar, Box, Toolbar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useGlobalContext } from '../context';

function MessagesBoxHeader({receiver, online}) {
  const {setSelectConversation} = useGlobalContext();
  const {username, profilePicture} = receiver;

  return (
    <Toolbar onClick={()=> setSelectConversation(0)}>
      <Avatar alt={username} src={profilePicture}/>
      <Box ml="1rem">
        <Typography >{username}</Typography>
        <Typography  sx={{opacity:".5", fontSize:".7rem"}}>{online? "Connected":"Disconnected"}</Typography>
      </Box>
    </Toolbar>
  )
}

export default MessagesBoxHeader