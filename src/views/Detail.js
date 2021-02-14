// * DEPENDENCIES
import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

import NotFound from "../assets/img/unnamed.png";

// * COMPONENTS
import Header from "../components/Header";


export default class Detail extends Component {

    // * DECLARACION DE VARIABLES
    state = ({
        key: 'f9a88492',
        detail: [],
        status: false
    })

    // * OBTIENE EL DETALLE DEL OBJETO (MOVIES - SERIES)
    getDetailSearch = () => {
        var value = this.props.match.params.id
        axios.get('http://www.omdbapi.com/?i='+value+'&apikey='+this.state.key)
        .then(x=> {
            this.setState({
                detail: x.data,
                status: true
            })
        })
    }

    // * INICIALIZACION DEL DETALLE (SERIE - MOVIE)
    componentDidMount = () => {
        this.getDetailSearch()
    }



    render() {
        return (
            <div className="container">
                {/* COMPONENT: HEADER */}
                <Header />
                <div className="cont-detail">
                    {
                        this.state.status ? (
                            // * DETALLE (SERIE - MOVIE)
                            <React.Fragment>
                                <div className="image">
                                    {
                                        this.state.detail.Poster === 'N/A' ? (
                                            <img src={NotFound} />
                                        ) : (
                                            <img src={this.state.detail.Poster} />
                                        )
                                    }
                                </div>
                                <div className="detail">
                                    <div className="title">
                                        <h2>Título : <span>{this.state.detail.Title}</span></h2>
                                    </div>
                                    <div className="years">
                                        <h2>Año : <span>{this.state.detail.Year}</span></h2>
                                    </div>
                                    <div className="gender">
                                        <h2>Género : <span>{this.state.detail.Genre}</span></h2>
                                    </div>
                                    <div className="language">
                                        <h2>Lenguaje : <span>{this.state.detail.Language}</span></h2>
                                    </div>
                                    <div className="actor">
                                        <h2>Actores : <span>{this.state.detail.Actors}</span></h2>
                                    </div>
                                    <div className="country">
                                        <h2>País : <span>{this.state.detail.Country}</span></h2>
                                    </div> 
                                </div>
                            </React.Fragment>
                        ) : (
                            // * MENSAJE DE CARGA
                            <div className="cont-loading">
                                <h1>Loading</h1>
                            </div>
                        )
                    }
                </div>
                {/* BOTON VOLVER */}
                <div className="btn-volver">
                    <Link to={'/home'}><h2>Volver</h2></Link>
                </div>
            </div>
        )
    }
}
