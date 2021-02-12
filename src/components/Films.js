import React, { Component } from 'react'
import { Link } from "react-router-dom";

import NotImg from "../assets/img/unnamed.png";



export default class Films extends Component {    
    render() {
        return (
            <React.Fragment>
            {
                this.props.status ? (
                    this.props.data.map(x => {
                        return (
                            <React.Fragment key={x.imdbID}>
                                <Link to={'/detail/'+x.imdbID} className="film-info">
                                    <div className="image">
                                        {
                                            x.Poster === 'N/A' ? (
                                                <img src={NotImg} />
                                            ) : (
                                                <img src={x.Poster} />
                                            )
                                        }
                                    </div>
                                    <div className="title">
                                        <h3>{x.Title}</h3>
                                    </div>
                                </Link>
                            </React.Fragment>
                        )
                    })
                ) : (
                    <div className="loading">
                        <h1>Cargando ...</h1>
                    </div>
                )
            }
        </React.Fragment>
        )
    }
}