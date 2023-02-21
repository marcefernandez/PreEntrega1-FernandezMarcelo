import React from 'react';
import './styleNav.css';
import CartWidget from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        
            <nav className='nav'>
                <div className='nav_logo'>
                    <img src='https://i.pinimg.com/564x/75/b7/f2/75b7f20bb508a50d668c3c17801fc1fc.jpg' alt='logo'/>
                </div>
                <div className='nav_title'>
                    <h1>MotoSafe</h1>
                </div>
                <div className='CartWidget'>
                    <CartWidget />
                </div>
            </nav>
        

    );
}

export default NavBar;