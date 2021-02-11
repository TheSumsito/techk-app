import React, { Component } from 'react'
import axios from "axios";

//styles
import "../assets/css/home.css"

//Components
import Films from "../components/Films";


export default class Home extends Component {

    state = {
        data: [],
        count: 0,
        status: false,
        err: ''
    }

    txtSearch = React.createRef()
    getSearchFilms = (e) => {
        e.preventDefault()
        const value = this.txtSearch.current.value

        axios({
            method: 'POST',
            url: 'http://www.omdbapi.com/?s='+value+'&apikey=f9a88492'
        }).then(x => {
            if(x.data.Response !== 'False'){
                this.setState({
                    status: true,
                    data: x.data.Search,
                    count: x.data.totalResults
                })
            }
        }).catch((err)=>{
            this.setState({
                status: false,
                err: err
            })
        })

    }
    render() {
        return (
            <div className="container">
                <form className="cont-film" onChange={this.getSearchFilms}>
                    <div className="cont-search">
                        <div className="title">
                            <h1>Buscador de Peliculas</h1>
                            <hr/>
                        </div>
                        <div className="search">
                            <input 
                                type="text"
                                placeholder="Buscar Pelicula"
                                ref={this.txtSearch}
                            />
                        </div>
                    </div>
                    <div className="film">
                        <Films
                            data={this.state.data}
                            status={this.state.status}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
