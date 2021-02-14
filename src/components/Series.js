import React, { Component } from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";


//Imports
import MQuery from "./MQuery";

export default class Series extends Component {
    state = {
        //? VAR SERIES
        series: [],
        status: false,
        paginate: false,
        err: []
    }

    constructor(props){
        super(props)
        this.state = {
            key: 'f9a88492'
        }
    }

    onChange(value) {
        this.setState({ value });
    }

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
            <div className="cont-carousel">
                {
                    this.state.status &&
                        <React.Fragment>
                            <div className="title">
                                <h1>Series Recomendadas</h1>
                            </div>
                            <div className="cont-image">
                                <MQuery
                                    status={this.state.status}
                                    series={this.state.series}
                                />
                            </div>
                        </React.Fragment>
                }
            </div>
        )
    }
}
