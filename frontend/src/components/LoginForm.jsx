import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Button, FormControlLabel, Radio, RadioGroup, TextField, Typography} from '@mui/material'
function LoginForm() {
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
            <TextField id="" label="Username" variant="outlined" />
            <TextField id="" label="Password" variant="outlined" />
            <Link to="/register"><Typography paragraph align='left'>Don't have an account ?</Typography></Link>
            <Button variant='contained' color='success'>Login</Button>
        </Box>
    </Box>
  )
}

export default LoginForm;