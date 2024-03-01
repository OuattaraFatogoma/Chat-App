import React from 'react';
import { List, Divider } from '@mui/material';
import ConversationCard from './ConversationCard';


function SidebarBody() {
  return (
    <div>
      <List>
        <ConversationCard name="martin" online/>
        <Divider/>
        <ConversationCard name="kale"/>
        <Divider/>
        <ConversationCard name="fat"/>
        <Divider/>
        <ConversationCard name="martino" online/>
        <Divider/>
        <ConversationCard name="marte"/>
        <Divider/>
        <ConversationCard name="marck"/>
      </List>
    </div>
  )
}

export default SidebarBody