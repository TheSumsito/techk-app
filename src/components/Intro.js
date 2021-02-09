import React, { Component } from 'react'

//Buscador de peliculas, ven y conoce los detalles de tus peliculas favoritas

export default class Intro extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="title">
                    <h1>Buscador de Películas</h1>
                </div>
                <div className="text">
                    <p>
                        Ven y Conoce <br/> 
                        los detalles de tus películas favorítas
                    </p>
                </div>
            </React.Fragment>
        )
    }
}
