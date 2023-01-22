import React from "react";
import c from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return  <nav className={c.nav}>
        <div className={c.item}>
            <NavLink to="/profile" activeClassName={c.active}>Profile</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/dialogs" activeClassName={c.active}>Messages</NavLink>
        </div>
        <div className={c.item}>
            <a href="/news">News</a>
        </div>
        <div className={c.item}>
            <a href="/music">Music</a>
        </div>
        <div className={c.item}>
            <a href="/settings">Settings</a>
        </div>
    </nav>
}