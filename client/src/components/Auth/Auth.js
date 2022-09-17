import React, {useState} from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import Input from './Input.js';
import useStyles from './styles';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin,googleLogout } from '@react-oauth/google';
const Auth = () => {
  const classes = useStyles();
  const [isSignUp,setSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const user = false;
  const switchMode = () => {
    setSignUp((prev) => !prev);
    handleShowPassword(false);
}

  const handleSubmit = () => {

  }
  const handleChange = () => {

  }
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

 
  return (
    <Container component = "main" maxWidth="xs">
      <Paper className = {classes.paper} elevation={3}>
        <Avatar className = {classes.avatar}>
          <LockOutlinedIcon/>
          </Avatar>
          <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign in'}</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
           <Grid container spacing={2}>
{
   isSignUp && (
    <>
        <Input name='firstName' handleChange={handleChange} label='First Name' autoFocus half/>
        <Input name='lastName' handleChange={handleChange} label='Last Name' half/>
        
    </>
)
}
<Input name="email" label="Email Address" handleChange={handleChange} type="email" />
<Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
{isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange}  type="password"></Input>}
            </Grid>
            <Button type="submit" fullWidth variant="contained" color ="primary" className = {classes.submit}>
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_API_TOKEN}>
                            <div>
                                {user ? (
                                    <>
                                        <div>

                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <GoogleLogin onSuccess={(res) => console.log(res)}/>
                                    </>
                                )}
                            </div>
                    </GoogleOAuthProvider>

                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? 'Already have an account? Sign in' : 'New User? Sign up'}
                            </Button>
                        </Grid>
                    </Grid>
          </form>
      </Paper>
    </Container>
  )
}

export default Auth