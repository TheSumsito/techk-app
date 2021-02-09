import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        active: false
    }

    test = () => {
        this.setState({
            active: true
        })
    }

    render() {
        if (!this.state.active) {
            return (
                <React.Fragment>
                    <div className="form-title">
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className="form-email">
                        <input 
                            type="email" 
                            placeholder="E-mail" 
                        />
                    </div>
                    <div className="form-password">
                        <input
                            type="password" 
                            placeholder="Contraseña"
                        />
                    </div>
                    <div className="form-button">
                        <button onClick={this.test} >
                            {this.props.button}
                        </button>
                    </div>
                    <div className="form-link">
                        <p>¿ No tienes cuenta ? <a href="#">Regístrate aqui</a></p>
                    </div>
                </React.Fragment>
            )   
        } else {
            return (
                <h1>hola</h1>
            )
        }
    }
}
