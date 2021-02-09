import React, { Component } from 'react'

//Assets
import "../assets/css/login.css";

//Componentes
import Form from "../components/Form";
import Intro from "../components/Intro";

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="form-group">.
                    <Form 
                        title="Bienvenido /a"
                        button="Iniciar Sesión"
                    />
                </div>
                <div className="col-02">
                    <Intro />
                </div>

            </div>
        )
    }
}
