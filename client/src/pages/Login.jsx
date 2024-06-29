import { Typography, Button } from '@mui/material';
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

function Login() {
  const nav = useNavigate();
  const {user} = useContext(AuthContext)
  const auth = getAuth()
 

  const handleLoginwithGoogle = async()=>{
    const provider = new GoogleAuthProvider();

    const res =  await signInWithPopup(auth, provider);
    
    if(localStorage.getItem('accessToken')){
      nav('/');
      return;
    }

  }

  return (
  <>
    <Typography variant='h5' sx ={{marginBottom: '10px'}} >Welcom to note APP</Typography>
    <Button variant='outlined' onClick={handleLoginwithGoogle}>login with google</Button> 
  </>
  )
}

export default Login;
