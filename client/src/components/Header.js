import React, { Component } from 'react';
import './../styles/Header.css';
import { NavLink  } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className='nav-header'>
                <ul className='nav-header-menu'>
                    <li className='menu-item'><NavLink activeStyle={{ opacity: 1}} className='menu-item-link' to="/">BTC </NavLink ></li>
                    <li className='menu-item'><NavLink activeStyle={{ opacity: 1}} className='menu-item-link'  to='/eth'>ETH</NavLink ></li>
                    <li className='menu-item'><NavLink activeStyle={{ opacity: 1}} className='menu-item-link'  to='/xrp'>XRP</NavLink ></li>
                    <li className='menu-item'><NavLink activeStyle={{ opacity: 1}}  className='menu-item-link'  to='/ltc'>LTC</NavLink ></li>
                </ul>
            </nav>
        );
    }
}

export default Header;
