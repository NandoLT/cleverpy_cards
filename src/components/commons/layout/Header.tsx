
import React from 'react';
import cleverPyLogo from '../../../assets/images/cleverpy.png';

import '../../../assets/css/Header.css';

const Header = () => {
    return (
        <nav className="navbar layout-header bordered" role="navigation" aria-label="main navigation">
          <a className="navbar-item" href="/">
              <img src={ cleverPyLogo } alt="roomusu-logo-img" width="150" height="120" />
          </a>
        </nav>
    )
}

export default Header;