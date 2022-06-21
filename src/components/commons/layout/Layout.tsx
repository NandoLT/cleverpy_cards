import React, { ReactElement } from 'react';
import Header from './Header';

import '../../../assets/css/Layout.css';

interface Props {
  children: ReactElement
}

const Layout: React.FC<Props> = ({ children }) => {
    return(
    <div className="layout">
        <Header />
        <main className="layout-main bordered">
            <section className="layout-content">
              {children}
            </section>
        </main>
    </div>
    );
}

export default Layout;