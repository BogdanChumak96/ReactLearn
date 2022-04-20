import React from 'react';
import style from './Nav.module.css'
import {BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Dialogs from '../Dialogs/Dialogs';
import Posts from '../Content/Posts/Posts';

const Nav = () => {
    return (
        
        <nav className={style.nav}>
            <ul>
                <li><NavLink to="/posts">Profile</NavLink></li>
                <li><NavLink to="/dialogs">Message</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/music">Music</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
       
        
    )
}

export default Nav