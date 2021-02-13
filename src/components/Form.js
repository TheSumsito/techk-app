import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import swal from "sweetalert";
import SimpleReactValidator from "simple-react-validator";
export default class Form extends Component {
    state = {
        status: false,
        data: [],
        token: '',
        error: '',
        validate: {}
    }


    emailRef = React.createRef()
    passRef = React.createRef()

    componentWillMount = () => {
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Campo Requerido',
                email: 'Correo Invalido'
            }
        })
    }

    getValidate = () => {
        this.setState({
            validate: {
                email: this.emailRef.current.value,
                pass: this.passRef.current.value
            }
        })

        this.validator.showMessages()
        this.forceUpdate();
    }



    authenticate = () => {
        var email = this.emailRef.current.value
        var password = this.passRef.current.value

        this.getValidate()
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
            {
                this.validator.allValid() &&
                    swal({
                        title: "Bienvenido Nuevamente !",
                        text: "Un gusto tenerte acá ! :')",
                        icon: "success",
                        buttons: "Cerrar",
                        className: "message"
                    });
            }
        }).catch((err)=>{
            this.setState({
                status: false,
                error:err
            })
            {
                this.validator.allValid() &&
                    swal({
                        title: "Error",
                        text: "Usuario y/o Contraseña incorrecta",
                        icon: "warning",
                        buttons: "Cerrar",
                        className: "message"
                    });
            }
        })   
    }

    createUser = () => {
        var email = this.emailRef.current.value
        var password = this.passRef.current.value

        console.log(email)


        this.getValidate()        

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
            {
                this.validator.allValid() &&
                    swal({
                        title: "Bienvenido /a",
                        text: "Gracias por registrarte con nosotros",
                        icon: "success",
                        buttons: "Cerrar",
                        className: "message"
                    });
            }
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
                    this.validator.allValid() &&
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
                            ref={this.emailRef}
                            name="txtEmail"
                            onChange={this.setState.title}
                        />
                        {
                            this.validator.message('txtEmail', this.state.validate.email , 'required')
                        }
                    </div>
                    <div className="password">
                        <input
                            type="password" 
                            placeholder="Contraseña"
                            ref={this.passRef}
                            name="txtPass"
                            onChange={this.setState.pass}
                        />
                        {
                            this.validator.message('txtPass', this.state.validate.pass, 'required')
                        }
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
