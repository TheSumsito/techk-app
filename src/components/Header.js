import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <nav className="cont-menu">
                <ul className="menu">
                    <li className="home">
                        <NavLink to="/home" >Home</NavLink>
                    </li>
                    <li className="logout">
                        <NavLink to="/" >Cerrar Sesión</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}
