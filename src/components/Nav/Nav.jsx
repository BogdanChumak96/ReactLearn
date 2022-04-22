import React from 'react';
import style from './Nav.module.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Dialogs from '../Dialogs/Dialogs';
import Posts from '../Content/Posts/Posts';
import Friends from './Friends/Friends';



const Nav = (props) => {
    
    return (
        <>
        
            <nav className={style.nav}>
                <ul>
                    <li><NavLink to="/posts">Profile</NavLink></li>
                    <li><NavLink to="/dialogs">Message</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/music">Music</NavLink></li>
                    <li><NavLink className={style.lastLi} to="/settings">Settings</NavLink></li>
                </ul>
                <Friends friendInfo = {props.navContent.friends}/>
            </nav>
            
        </>
    )
}

export default Nav