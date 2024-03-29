import React from 'react'
import { Box, Typography } from '@mui/material';


function DefaultMessageBox({user}) {
  return (
    <div  className="defaultMessageBox" style={{width:"100%", height:"100%", display:"flex", placeItems:"center"}}>
      <Box textAlign="center"  width="100%">
        <Typography variant='h5'>Welcome 👋 {user.username} </Typography>
        <Typography paragraph>Select a chat to start messaging</Typography>
      </Box>
    </div>
  )
}

export default DefaultMessageBox