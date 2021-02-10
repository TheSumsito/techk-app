import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink to="/home" ></NavLink></li>
                    <li>Cerrar Sesión</li>
                </ul>
            </nav>
        )
    }
}
