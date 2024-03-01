import React from 'react'
import { Divider, Drawer} from '@mui/material'
import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';


function Sidebar() {
  return (
    <div>
      <Drawer variant="permanent" open 
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "300px" },
        }}
      >
        <SidebarHeader/>
        <Divider/>
        <SidebarBody/>
      </Drawer>
    </div>
  )
}

export default Sidebar