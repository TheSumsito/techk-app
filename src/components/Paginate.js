// *DEPENDENCIES
import React, { Component } from 'react'
import Pagination from 'react-js-pagination';
import axios from "axios";

export default class Paginate extends Component {

    // * DECLARACION DE VARIABLES
    state = {
        key: '',
        movies: [],
        count: 0,
        activePage: 0,
        status: false,
        paginate: false,
        err: [],
    }

    // * INICIALIZACION DE VARIABLES
    constructor(props){
        super(props)
        this.state = {
            activePage: 1,
            activePage: 1,
            key: 'f9a88492'
        }
    }

    // * CHANGE PAGE PAGINATE MOVIES
    changePageMovies = (pageNumber) =>{
        const value = this.props.request
        console.log(pageNumber)
        axios({
            method: 'POST',
            url: 'http://www.omdbapi.com/?s='+value+'&page='+pageNumber+'&type=movie&apikey='+this.state.key
        }).then((x) => {
            this.setState({
                status: true,
                paginate: true,
                movies: x.data.Search,
                activePage: pageNumber
            })
        }).catch((err)=>{
            this.setState({
                status: false,
                paginate: false,
                err: err
            })
        })
    }

    render() {
        return (
            <div className="paginate">
                {/* PAGINACION */}
                <Pagination 
                    activePage={this.props.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={this.props.totalItemsCount}
                    pageRangeDisplayed={5}
                    itemClass="page-item"
                    linkClass="page-link"   
                    activeLinkClass="active"
                    onChange={this.changePageMovies.bind(this)}
                />
            </div>
        )
    }
}
