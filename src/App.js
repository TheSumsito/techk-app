import React, { Component } from 'react'
import Router from "./Router";

//ASSETS GLOBAL
import "../src/assets/css/styles.css";
import "../src/assets/css/responsive.css"
import "../src/assets/css/animated.css";

export default class Login extends Component {
    
    render() {
        return (
            <React.Fragment>
                <Router />
            </React.Fragment>
        )   
    }
}
