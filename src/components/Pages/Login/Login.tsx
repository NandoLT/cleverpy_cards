import React, { useEffect } from 'react'
import { LoginForm } from './LoginForm'
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';
import storage from '../../../utils/storage';

interface credentialsState {
  email: string
  password: string
}

interface Props {
  isLogged: boolean
}

export const Login = ({isLogged}:Props) => {

  const navigate = useNavigate ();

  const launchToast = (error:string) => {
    toast.error(error, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
    }); 
  }

  useEffect(() => {
    isLogged && navigate('/')
  }, [isLogged, navigate])

  const onSubmit= (credentials:credentialsState) => {
    const {email, password} = credentials;

    if(email === 'fernando@cleverpy.com' && password === '12345') { 
      storage.set('auth', true);  
      window.location.reload();
    }
    if(email !== 'fernando@cleverpy.com' || password !== '12345') { launchToast('User email or password not valid')}
  }
  return (
    <LoginForm onSubmit={onSubmit}/>
  )
}
