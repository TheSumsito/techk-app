import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import swal from "sweetalert";

export default class Form extends Component {
    state = {
        status: false,
        data: [],
        token: '',
        error: ''
    }


    txtEmail = React.createRef()
    txtPass = React.createRef()

    authenticate = () => {
        var email = this.txtEmail.current.value
        var password = this.txtPass.current.value

        axios({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            data: {
                email: email,
                password: password
            }
        }).then((res)=>{
            this.setState({
                status: true,
                token: res.data.token
            })
            swal({
                title: "Bienvenido Nuevamente !",
                text: "Un gusto tenerte acá ! :')",
                icon: "success",
                buttons: "Cerrar",
                className: "message"
            });
        }).catch((err)=>{
            this.setState({
                status: false,
                error:err
            })
            swal({
                title: "Error",
                text: "Usuario y/o Contraseña incorrecta",
                icon: "warning",
                buttons: "Cerrar",
                className: "message"
            });
        })   
    }

    createUser = () => {
        var email = this.txtEmail.current.value
        var password = this.txtPass.current.value

        axios({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            data: {
                email: email,
                password: password
            }
        }).then((res)=>{
            this.setState({
                status: true,
                data: res.data
            })
            swal({
                title: "Bienvenido /a",
                text: "Gracias por registrarte con nosotros",
                icon: "success",
                buttons: "Cerrar",
                className: "message"
            });
        }).catch((err)=>{
            this.setState({
                status: false,
                err: err
            })
            
        })
    }


    getTypeSubmit = (e) => {
        e.preventDefault()
        !this.props.active ? (
            this.authenticate()
        ) : (
            this.createUser()
        )
    }


    render() {
        return (
            <React.Fragment>
                {
                    this.state.status &&
                        <Redirect to={'/home'} />
                }
                <form onSubmit={this.getTypeSubmit} autoComplete="off">
                    <div className="title">
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className="email">
                        <input 
                            type="email" 
                            placeholder="E-mail" 
                            ref={this.txtEmail}
                            name="txtEmail"
                            required
                        />
                    </div>
                    <div className="password">
                        <input
                            type="password" 
                            placeholder="Contraseña"
                            ref={this.txtPass}
                            required
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
                </form>
            </React.Fragment>
        )      

    }
}
