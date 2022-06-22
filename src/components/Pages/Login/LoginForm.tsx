import React,{useState} from 'react';
import {Button} from '@mui/material';

import '../../../assets/css/LoginForm.css';

interface credentialsState {
    email: string
    password: string
}

interface Props {
    onSubmit: (credentials:credentialsState) => void
}

export const LoginForm = ({onSubmit}:Props) => {

    const initialState:credentialsState = {
        email:'',
        password:''
    }

    const [credentials, setCredentials] = useState(initialState);

    const handleChangeCredentials = (event:React.ChangeEvent<HTMLInputElement>) => {
        setCredentials(oldCredentials => ({
            ...oldCredentials,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(credentials);
    }

    const {email, password} = credentials;

    return (
        <form className="loginForm" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="fernando@cleverpy.com" className="login-input" onChange={handleChangeCredentials} value={email}></input>
            <input type="password" name="password" placeholder="12345" className="login-input" onChange={handleChangeCredentials} value={password}></input>
            <Button 
                type="submit"
                className="loginForm-submit"
                variant='contained' 
                color="success" 
                disabled={ !email || !password}
            >
            Log in
            </Button>
        </form>
    )
}
