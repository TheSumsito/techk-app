import React, { Component } from 'react'
import { Link } from "react-router-dom";

//Assets
import "../assets/css/login.css";

//Componentes
import Form from "../components/Form";
import Intro from "../components/Intro";

export default class Login extends Component {

    state = {
        active: false
    }

    activeModal = () => {
        !this.state.active ? (
            this.setState({
                active: true
            })
        ) : (
            this.setState({
                active: false
            })
        )
    }


    render() {
        return (
            <div className="container">
                {
                    !this.state.active ? (
                        <React.Fragment>
                            <div className="cont-login">
                                <Form 
                                    title="Bienvenido /a"
                                    btnReg="Iniciar Sesión"
                                />
                                <div className="link">
                                    <p>¿ No tienes cuenta ? <a href="#" onClick={this.activeModal} >Regístrate aqui</a></p>
                                    <Link to="/home">Home</Link>
                                </div>
                            </div>
                            <div className="col-02">
                                <Intro />
                            </div>
                        </React.Fragment>
                    ) : (
                        <div className="cont-register">
                            <Form 
                                title="Registrarse"
                                btnReg="Crear Cuenta"
                                btnBack="Volver al Login"
                                divisor={true}
                            />      
                            <div className="link">
                                <p>¿ Ya tienes cuenta ? <a href="#" onClick={this.activeModal}>Volver al Login</a></p>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
