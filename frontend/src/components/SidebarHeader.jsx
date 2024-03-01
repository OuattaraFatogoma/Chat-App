import { Box, IconButton, TextField, Toolbar, Tooltip } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'

function SidebarHeader() {
  return (
    <Toolbar >
          <Box display="flex" justifyContent="space-between" alignItems="center" > 
            <Tooltip title="Logout">
              <IconButton>
                <LogoutIcon sx={{transform:"rotateZ(180deg)", color:"red"}}/>
              </IconButton>
            </Tooltip>
            <TextField label="Search" size='small' variant="outlined" sx={{ ml:"1rem"}}/>
          </Box>
        </Toolbar>
  )
}

export default SidebarHeader