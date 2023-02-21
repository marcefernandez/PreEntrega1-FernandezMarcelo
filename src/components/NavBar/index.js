import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget';

export const NavBar = () => {
    return (
            
            <nav className='nav'>
                <div className='nav_logo'>
                    <img src='https://i.pinimg.com/564x/75/b7/f2/75b7f20bb508a50d668c3c17801fc1fc.jpg' alt='logo'/>
                </div>
                <ul className='nav_list'>
                    <li>
                        <a className='nav_link' href='Nosotros'>Nosotros</a>
                    </li>
                    <li>
                        <a className='nav_link' href='Contactos'>Contactos</a>
                    </li>
                    <li>
                        <a className='nav_link' href='#'>
                            <CartWidget />
                        </a>
                    </li>
                </ul>
            </nav>
        

    );
}

export default NavBar;