import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {LoadingButton} from '@mui/lab';
import {Box, TextField, Typography} from '@mui/material';
import useLogin from '../hooks/useLogin';


function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading, login} = useLogin();
  
  const handleLoging = (e) => {
    login(username, password);
  }

  return (
    <Box height="100%" display="flex" justifyContent="center" alignItems="center">
        <Box 
        padding="1rem" width="300px" border="1px solid" borderRadius="10px" display="flex" flexDirection="column" justifyContent="space-between"
        sx={{
            '& .MuiTextField-root': { mb: "2rem"},
        }}
        className="form"
        >
            <Typography variant='h3' align='center'>Login</Typography>
            <TextField label="Username" variant="outlined" onChange={(e)=>setUsername(e.target.value)} value={username}/>
            <TextField label="Password" variant="outlined" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <Link to="/register"><Typography paragraph align='left'>Don't have an account ?</Typography></Link>
            <LoadingButton loading={loading} variant='contained' color='success' onClick={handleLoging}><span>Login</span></LoadingButton>
        </Box>
    </Box>
  )
}

export default LoginForm;