import { Box, Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import SendSharpIcon from '@mui/icons-material/SendSharp';
import React, { useState } from 'react'
import useSendMessage from '../hooks/useSendMessage';

function MessagesBoxFooter({receiver}) {
  const {sendMessage} = useSendMessage();
  const [text, setText] = useState("");

  const handleSendMessage = () => {
    if(!text) return;
    sendMessage(receiver.user_id, text);
    setText("");
  }
  return (
    <Box className="MessagesBoxFooter" backgroundColor="#141b2d">
      <Divider/>
      <FormControl sx={{ p: "1rem", width: '100%'}} variant="outlined">
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={handleSendMessage}
                >
                  <SendSharpIcon/>
                </IconButton>
              </InputAdornment>
            }
            value={text}
            onChange={(e)=>setText(e.target.value)}
          />
        </FormControl>
    </Box>
  )
}

export default MessagesBoxFooter