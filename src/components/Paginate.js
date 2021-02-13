import React, { Component } from 'react'
import Pagination from 'react-js-pagination';
import axios from "axios";

export default class Paginate extends Component {

    //Estado de variables
    state = {
        //? VAR MOVIES
        key: '',
        movies: [],
        countMovies: 0,
        activePageMovies: 0,
        statusMovies: false,
        paginateMovies: false,
        errMovies: [],


        //? VAR SERIES
        series: [],
        countSeries: 0,
        activePageSeries: 0,
        statusSeries: false,
        paginateSeries: false,
        errSeries: []
    }

    //Inicializa las variables asignadas (paginate)
    constructor(props){
        super(props)
        this.state = {
            activePageMovies: 1,
            activePageSeries: 1,
            key: 'f9a88492'
        }
    }



    changePageSeries = (pageNumber) => {
        
        const value = this.props.request
        axios({
            method: 'POST',
            url: 'http://www.omdbapi.com/?s='+value+'&page='+pageNumber+'&type=series&apikey='+this.state.key
        }).then((x)=>{
            if(x.data.Response === 'True') {
                this.setState({
                    statusSeries:true,
                    paginateSeries: true,
                    series: x.data.Search,
                    activePageSeries: pageNumber
                })
            }
        }).catch((err) =>{
            this.setState({
                statusSeries: false,
                paginateSeries: false,
                errSeries:err
            })
        })
    }


    changePageMovies = (pageNumber) =>{
        const value = this.props.request
        console.log(pageNumber)
        axios({
            method: 'POST',
            url: 'http://www.omdbapi.com/?s='+value+'&page='+pageNumber+'&type=movie&apikey='+this.state.key
        }).then((x) => {
            this.setState({
                statusMovies: true,
                paginateMovies: true,
                movies: x.data.Search,
                activePageMovies: pageNumber
            })
        }).catch((err)=>{
            this.setState({
                statusMovies: false,
                paginateMovies: false,
                errMovies: err
            })
        })
    }



    render() {
        return (
            <div className="paginate">
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
