import React, { useEffect, useRef, useState } from 'react'
import { Divider, Drawer} from '@mui/material'
import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';
import { useGlobalContext } from '../context';


function Sidebar() {
  const {selectConversation} = useGlobalContext();
  const [showSidebar, setShowSidebar] = useState(true);
  const sidebar = useRef(null);

  useEffect(()=>{
    if(sidebar.current.offsetWidth <=299) setShowSidebar(true);
    else {
      if(selectConversation===0) setShowSidebar(true);
      if(selectConversation!==0) setShowSidebar(false);
    }
    console.log(sidebar.current.offsetWidth);
  }, [selectConversation])

  return (
    <div>
      <Drawer variant="persistent" open={showSidebar}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: {xs:"100%", sm:"300px"} },
        }}
      >
        <SidebarHeader sidebar={sidebar}/>
        <Divider/>
        <SidebarBody/>
      </Drawer>
    </div>
  )
}

export default Sidebar