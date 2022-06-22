import { useEffect } from 'react'
import { LoginForm } from './LoginForm'
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';
import storage from '../../../utils/storage';
import { useAppSelector, useAppDispatch } from '../../../App/hooks';
import { setAuthorization, selectAuth } from '../../../features/authorization/authSlice';

interface credentialsState {
  email: string
  password: string
}

export const Login = () => {

  const isLogged = useAppSelector(selectAuth);

  const navigate = useNavigate ();
  const dispatch = useAppDispatch();

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
      dispatch(setAuthorization(storage.get('auth')));
    }
    if(email !== 'fernando@cleverpy.com' || password !== '12345') { launchToast('User email or password not valid')}
  }
  return (
    <LoginForm onSubmit={onSubmit}/>
  )
}
