import { Box, IconButton, TextField, Toolbar, Tooltip } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import useLogout from '../hooks/useLogout';
import { useGlobalContext } from '../context';


function SidebarHeader({sidebar}) {
  const {logout} = useLogout();
  const {searchTerm, setSearchTerm} = useGlobalContext();
  
  return (
    <Toolbar ref={sidebar}>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%"> 
          <Tooltip title="Logout">
            <IconButton onClick={()=>logout()}>
              <LogoutIcon sx={{transform:"rotateZ(180deg)", color:"red"}}/>
            </IconButton>
          </Tooltip>
          <TextField label="Search" size='small' variant="outlined" sx={{ ml:"1rem", width:"80%"}} value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
        </Box>
    </Toolbar>
  )
}

export default SidebarHeader;