import { Box, Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import SendSharpIcon from '@mui/icons-material/SendSharp';
import React from 'react'

function MessagesBoxFooter() {
  return (
    <Box className="MessagesBoxFooter" backgroundColor="#141b2d">
      <Divider/>
      <FormControl sx={{ p: "1rem", width: '100%'}} variant="outlined">
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                >
                  <SendSharpIcon/>
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
    </Box>
  )
}

export default MessagesBoxFooter