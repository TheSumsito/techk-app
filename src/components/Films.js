import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export default class Films extends Component {
    state = {
        data: []
    }

    componentDidMount = () => {
        axios.get('http://www.omdbapi.com/?s=batman&apikey=f9a88492')
            .then((x) => {
                this.setState({
                    data: x.data.Search
                })
            })
        
    }

    render() {
        const data = this.state.data
        if(data.length == 0) {
            return (
                <h1>Cargando ...</h1>
            )
        } else {
            return (
                <form className="cont-film">
                    <div className="cont-search">
                        <div className="title">
                            <h1>Buscador de Peliculas</h1>
                            <hr/>
                        </div>
                        <div className="search">
                            <input 
                                type="text"
                                placeholder="Buscar Pelicula"
                            />
                            <button>
                                Buscar
                            </button>
                        </div>
                    </div>
                    <div className="film">
                        {
                            this.state.data.map((film, i) => {
                                return (
                                    <div className="film-info">
                                        <div className="image">
                                            <Link key={i}><img src={film.Poster} /></Link>  
                                        </div>
                                        <div className="title">
                                            <h3><Link key={i}>{film.Title}</Link></h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </form>
            )
        }
    }
}
