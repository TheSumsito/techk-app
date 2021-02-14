//  * DEPENDENCIES
import React, { Component } from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";


// * IMPORTS
import MQuery from "./MQuery";

export default class Series extends Component {
    //* STATE - VARIABLES
    state = {
        series: [],
        status: false,
        paginate: false,
        err: []
    }

    //* INICIALIZACION DE VARIABLES
    constructor(props){
        super(props)
        this.state = {
            key: 'f9a88492'
        }
    }

    
    // * LISTADO DE SERIES
    componentWillMount = () => {
        axios({
            method: 'POST',
            url: 'http://www.omdbapi.com/?s=man&type=series&apikey='+this.state.key
        }).then((x)=>{
            this.setState({
                status: true,
                series: x.data.Search,
                paginate: false
            })
        })
    }
    
    render() {
        return (
            <React.Fragment>
                {
                    this.state.status &&
                        <div className="cont-carousel animate__animated animate__bounceIn">
                            <div className="title">
                                <h1>Series Recomendadas</h1>
                            </div>
                            <div className="cont-image">
                                {/* MEDIAQUERY'S */}
                                <MQuery
                                    status={this.state.status}
                                    series={this.state.series}
                                />
                            </div>
                        </div>
                }
            </React.Fragment>
        )
    }
}
