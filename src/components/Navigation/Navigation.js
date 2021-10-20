import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Navigation.css'

const Navigation = () => {

    const {user, logout}= useFirebase();
    return (
        <div className='nav-items'>
            <NavLink className='links' to= "/home" activeStyle={{color : "teal", textDecoration: 'underline'}} >Home</NavLink>
            <NavLink className='links' to= "/about" activeStyle={{color : "teal", textDecoration: 'underline'}}>About</NavLink>
            <NavLink className='links' to= "/appointment"activeStyle={{color : "teal", textDecoration: 'underline'}}>Appointment</NavLink>
            <button className="nav-button-div">
            <NavLink className="nav-button"  to= "/register" activeStyle={{color : "teal", textDecoration: 'underline'}}>Register</NavLink> </button>
            {!user.email && <button className="nav-button-div">
            <NavLink className="nav-button"  to= "/login" activeStyle={{color : "teal", textDecoration: 'underline'}}>Login</NavLink>
            </button> }
            <span className="name"> {user.displayName} </span>
            {user.email && <button onClick={logout} className="nav-button-div"> Log Out
            </button> }
        </div>
    );
};

export default Navigation;