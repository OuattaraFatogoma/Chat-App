import { Box, IconButton, TextField, Toolbar, Tooltip } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import useLogout from '../hooks/useLogout';
import { useGlobalContext } from '../context';


function SidebarHeader() {
  const {logout} = useLogout();
  const {searchTerm, setSearchTerm} = useGlobalContext();
  
  return (
    <Toolbar >
          <Box display="flex" justifyContent="space-between" alignItems="center" > 
            <Tooltip title="Logout">
              <IconButton onClick={()=>logout()}>
                <LogoutIcon sx={{transform:"rotateZ(180deg)", color:"red"}}/>
              </IconButton>
            </Tooltip>
            <TextField label="Search" size='small' variant="outlined" sx={{ ml:"1rem"}} value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
          </Box>
        </Toolbar>
  )
}

export default SidebarHeader;