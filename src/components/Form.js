import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="title">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="email">
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                    />
                </div>
                <div className="password">
                    <input
                        type="password" 
                        placeholder="Contraseña"
                    />
                </div>
                {
                    this.props.divisor &&
                        <hr />
                }
                <div className="button">
                    <button>
                        {this.props.btnReg}
                    </button>
                </div>
            </React.Fragment>
        )             

    }
}
