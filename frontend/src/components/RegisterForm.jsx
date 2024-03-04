import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {Box, FormControlLabel, Radio, RadioGroup, TextField, Typography} from '@mui/material'
import useRegister from '../hooks/useRegister';
import {LoadingButton} from '@mui/lab';


function RegisterForm() {
    const [info, setInfo] = useState({username:"", password:"", confirmPassword:"", gender:"male"});
    const {loading, register} = useRegister();

    const handleRegister = () => {
        const {username, password, confirmPassword, gender} = info;
        register(username, password, confirmPassword, gender);
    }
    
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
            <TextField  label="Username" variant="outlined" onChange={(e)=> setInfo(info => ({...info, username:e.target.value}))} value={info.username}/>
            <TextField  label="Password" variant="outlined" onChange={(e)=> setInfo(info => ({...info, password:e.target.value})) } value ={info.password}/>
            <TextField  label="Confirm Password" variant="outlined" onChange={(e)=> setInfo(info => ({...info, confirmPassword:e.target.value})) } value ={info.confirmPassword}/>
            <RadioGroup
                sx={{display:"flex", justifyContent:"space-around", flexDirection:"row"}}
            onChange={(e)=> setInfo(info => ({...info, gender:e.target.value})) } value ={info.gender}>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
            <Link to="/login"><Typography paragraph align='left'>Already have an account ?</Typography></Link>
            <LoadingButton loading={loading} variant='contained' color='success' onClick={handleRegister}>Register</LoadingButton>
        </Box>
    </Box>
  )
}

export default RegisterForm;