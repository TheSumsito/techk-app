import React, { Component } from 'react'
import axios from "axios";
import Pagination from 'react-js-pagination';

//styles
import {  } from "../assets/css/header.css";
import "../assets/css/home.css"

//Components
import Header from "../components/Header";
import Films from "../components/Films";


export default class Home extends Component {

    state = {
        data: [],
        count: 0,
        status: false,
        paginate: false,
        err: '',
        activePage: 0,
        length: 0
    }

    constructor(props){
        super(props)
        this.state = {
            activePage: 1
        }
    }

    txtSearch = React.createRef()
    getSearchFilms = (e) => {
        e.preventDefault()
        const value = this.txtSearch.current.value
        const length = value.length
        
        if(length === 0){
            axios({
                method: 'POST',
                url: 'http://www.omdbapi.com/?s=man&type=movie&apikey=f9a88492'
            }).then((x)=> {
                this.setState({
                    status: true,
                    paginate: false,
                    data: x.data.Search,
                    activePage: 1
                })
            })
        } else {
            axios({
                method: 'POST',
                url: 'http://www.omdbapi.com/?s='+value+'&type=movie&apikey=f9a88492'
            }).then(x => {
                if(x.data.Response !== 'False'){
                    this.setState({
                        status: true,
                        paginate: true,
                        data: x.data.Search,
                        count: x.data.totalResults,
                        activePage: 1
                    })
                } else {
                    this.setState({
                        data: [],
                        status: false,
                        paginate: false
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
    
    }

    changePage = (pageNumber) =>{
        const value = this.txtSearch.current.value

        axios({
            method: 'POST',
            url: 'http://www.omdbapi.com/?s='+value+'&page='+pageNumber+'&type=movie&apikey=f9a88492'
        }).then((x) => {
            if(x.data.Response !== 'False'){
                this.setState({
                    status: true,
                    paginate: true,
                    data: x.data.Search,
                    activePage: pageNumber
                })
            } else {
                this.setState({
                    data: [],
                    status: false,
                    paginate: false,
                    count: 0
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

    componentDidMount() {
        axios({
            method: 'POST',
            url: 'http://www.omdbapi.com/?s=man&type=movie&apikey=f9a88492'
        }).then((x)=> {
            this.setState({
                status: true,
                paginate: false,
                data: x.data.Search
            })
            
        })

    }


    render() {
        return (
            <div className="container">
                <Header />
                <form className="cont-film" onChange={this.getSearchFilms}>
                    <div className="cont-search">
                        <div className="title">
                            <h1>Buscador de Peliculas</h1>
                        </div>
                        <div className="divider"></div>
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
                    {
                        this.state.paginate &&
                        <div className="paginate">
                            <Pagination 
                                activePage={this.state.activePage}
                                itemsCountPerPage={10}
                                totalItemsCount={parseInt(this.state.count)}
                                pageRangeDisplayed={5}
                                itemClass="page-item"
                                linkClass="page-link"   
                                activeLinkClass="active"
                                onChange={this.changePage.bind(this)}
                            />
                        </div>
                    }
                </form>
            </div>
        )
    }
}
