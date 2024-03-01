import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Button, FormControlLabel, Radio, RadioGroup, TextField, Typography} from '@mui/material'
function RegisterForm() {
  return (
    <Box height="100%" display="flex" justifyContent="center" alignItems="center">
        <Box 
        padding="1rem" width="300px" border="1px solid" borderRadius="10px" display="flex" flexDirection="column" justifyContent="space-between"
        sx={{
            '& .MuiTextField-root': { mb: 1.5},
        }}
        className="form"
        >
            <Typography variant='h3' align='center'>Register</Typography>
            <TextField id="" label="Username" variant="outlined" />
            <TextField id="" label="Password" variant="outlined" />
            <TextField id="" label="Confirm Password" variant="outlined" />
            <RadioGroup
                sx={{display:"flex", justifyContent:"space-around", flexDirection:"row"}}
            >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
            <Link to="/login"><Typography paragraph align='left'>Already have an account ?</Typography></Link>
            <Button variant='contained' color='success'>Register</Button>
        </Box>
    </Box>
  )
}

export default RegisterForm;