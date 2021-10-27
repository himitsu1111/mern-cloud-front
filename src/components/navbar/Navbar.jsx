import React from 'react';
import './navbar.sass';
import './navbar-fonts.sass';
import Logo from '../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar_logo"/>
                <div className="navbar_header header-f">MERN Cloud</div>
                <div className="navbar_login header-f"><NavLink to="/login">Войти</NavLink></div>
                <div className="navbar_registration header-f"><NavLink to="/registration">Регистрация</NavLink></div> 
            </div>
            
        </div>
    );
};

export default Navbar;