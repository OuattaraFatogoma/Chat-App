import React from 'react';
import { styled } from '@mui/material/styles';
import { Avatar,Badge, Box, ListItem, ListItemAvatar, ListItemButton, ListItemText} from '@mui/material'
import data from '../assets/Emojis.json'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));


function ConversationCard({name, online}) {
  return (
    <ListItem disablePadding>
        <ListItemButton>
        <ListItemAvatar>
          <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant={ online && "dot"}
          >
              <Avatar alt={name} src={"https://avatar.iran.liara.run/public/boy?username="+ name}/>
          </StyledBadge>
        </ListItemAvatar>
        <ListItemText primary={name} />
        <ListItemText primary={data[Math.floor(Math.random()*15)].emoji} sx={{textAlign:"right"}}/>
        </ListItemButton>
    </ListItem>
    )
}

export default ConversationCard