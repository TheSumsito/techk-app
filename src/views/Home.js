// * DEPENDENCIES
import React, { Component } from 'react'
import axios from "axios";
import Pagination from 'react-js-pagination';

// * COMPONENTS
import Header from "../components/Header";
import Films from "../components/Films";
import Series from "../components/Series";


export default class Home extends Component {
    //* STATE - VARIABLES
    state = {
        //? VAR MOVIES
        key: '',
        movies: [],
        count: 0,
        activePage: 0,
        status: false,
        paginate: false,
        err: []
    }

    //* INICIALIZACION DE VARIABLES
    constructor(props){
        super(props)
        this.state = {
            activePage: 1,
            key: 'f9a88492',
        }
        this.searchRef = React.createRef()
    }


    // * BUSCADOR DE PELICULAS
    getSearchMovies = (req) => {
        if(req === ''){
            req = 'man'
        }
        axios({
            method: 'POST',
            url: 'http://www.omdbapi.com/?s='+req+'&type=movie&apikey='+this.state.key
        }).then((x) => {
            if(x.data.Response === 'True'){
                this.setState({
                    status: true,
                    paginate: true,
                    movies: x.data.Search,
                    count: x.data.totalResults,
                    activePage: 1
                })
            }
        }).catch((err)=>{
            this.setState({
                status: false,
                paginate: false,
                err: err
            })
        })
    }

    // * ACCION PAGINATE DE PELICULAS
    changePageMovies = (pageNumber) =>{
        const value = this.searchRef.current.value
        axios({
            method: 'POST',
            url: 'http://www.omdbapi.com/?s='+value+'&page='+pageNumber+'&type=movie&apikey='+this.state.key
        }).then((x) => {
            if(x.data.Response === 'True') {
                this.setState({
                    status: true,
                    paginate: true,
                    movies: x.data.Search,
                    activePage: pageNumber
                })
            }
        }).catch((err)=>{
            this.setState({
                status: false,
                paginate: false,
                err: err
            })
        })
    }

    // * FILTRA POR VALOR DEL INPUT
    getSearchFilter = (e) => {
        e.preventDefault()
        const values = this.searchRef.current.value
        this.getSearchMovies(values)
    }

    //* BUSQUEDA PRINCIPAL (SIN PAGINATE)
    componentDidMount() {
        axios({
            method: 'POST',
            url: 'http://www.omdbapi.com/?s=man&type=movie&apikey='+this.state.key
        }).then((x)=>{
            this.setState({
                status: true,
                movies: x.data.Search,
                paginate: false
            })
        })
    }


    render() {
        return (
            <div className="container">
                {/* COMPONENTS : HEADER, SERIES */}
                <Header />
                <Series />
                <form className="cont-film" onChange={this.getSearchFilter}>
                    <div className="cont-search">
                        <div className="title">
                            <h1>Buscador de Peliculas</h1>
                        </div>
                        <div className="divider"></div>
                        <div className="search">
                            <input 
                                type="text"
                                placeholder="Buscar Pelicula"
                                ref={this.searchRef}
                            />
                        </div>
                    </div>
                    <div className="film">
                        {/* COMPONENT: FILMS */}
                        <Films
                            status={this.state.status}
                            movies={this.state.movies}
                        />
                    </div>
                    {
                        this.state.paginate &&
                            <div className="paginate">
                                {/* PAGINATION */}
                                <Pagination 
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={10}
                                    totalItemsCount={parseInt(this.state.count)}
                                    pageRangeDisplayed={3}
                                    itemClass="page-item"
                                    linkClass="page-link"   
                                    activeLinkClass="active"
                                    onChange={this.changePageMovies.bind(this)}
                                />
                            </div>
                    }
                </form>
            </div>
        )
    }
}
