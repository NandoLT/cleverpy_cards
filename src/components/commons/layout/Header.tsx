
import cleverPyLogo from '../../../assets/images/cleverpy.png';
import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../App/hooks';
import { selectAuth } from '../../../features/authorization/authSlice';
import { logOut } from '../../../features/authorization/authSlice'
import storage from '../../../utils/storage';

import '../../../assets/css/Header.css';

const Header = () => {
    const isLogged = useAppSelector(selectAuth);

    const dispatch = useAppDispatch()

    const handleLogOut = () => {
        storage.set('auth', false);
        dispatch(logOut(false))
    }

    return (
        <nav className="navbar layout-header bordered" role="navigation" aria-label="main navigation">
            {isLogged && 
                (
                    <div className="btn-logout">
                        <Button onClick={handleLogOut} variant="contained" color="primary">Log Out</Button>
                    </div>
                )}
            <a className="navbar-item" href="/">
                <img src={ cleverPyLogo } alt="roomusu-logo-img" width="150" height="120" />
            </a>
        </nav>
    )
}

export default Header;