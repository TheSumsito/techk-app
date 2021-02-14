// * DEPENDENCIES
import React, { Component } from 'react'

// * COMPONENTS
import Form from "../components/Form";
import Intro from "../components/Intro";

export default class Login extends Component {

    state = {
        active: false
    }

    // ? SE LLAMA DEPENDIENDO DEL ESTADO
    activeModal = () => {
        !this.state.active ? (
            //* ACTIVA MODAL REGISTRAR
            this.setState({
                active: true
            })
        ) : (
            //* ACTIVA LOGIN AUTHENTICATE
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
                                {/* COMPONENT: FORM (LOGIN) */}
                                <Form 
                                    title="Bienvenido /a"
                                    btnReg="Iniciar Sesión"
                                    active={false}
                                />
                                {/* LINK */}
                                <div className="link">
                                    <p>¿ No tienes cuenta ? <a href="#" onClick={this.activeModal} >Regístrate aqui</a></p>
                                </div>
                            </div>
                            {/* COMPONENT: INTRO */}
                            <div className="col-02">
                                <Intro />
                            </div>
                        </React.Fragment>
                    ) : (
                        <div className="cont-register animate__animated animate__bounceInDown">
                            {/* COMPONENT: FORM (REGISTER) */}
                            <Form 
                                title="Registrarse"
                                btnReg="Crear Cuenta"
                                btnBack="Volver al Login"
                                divisor={true}
                                active={true}
                            />      
                            {/* LINK */}
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
