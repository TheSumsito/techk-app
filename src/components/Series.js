import React, { Component } from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import Icon from 'react-fa';
import '@brainhubeu/react-carousel/lib/style.css';



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

    componentDidMount = () => {
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
                <div className="title">
                    <h1>Series Recomendadas</h1>
                </div>
                <div className="cont-image">
                    <Carousel
                        arrows
                        slidesPerPage={4}
                        slidesPerScroll={1}
                        infinite>
                        {
                            this.state.status &&
                                this.state.series.map(x=>{
                                    return (
                                        <Link to={'/detail/'+x.imdbID} className="image">
                                            <img src={x.Poster} />
                                        </Link>
                                    )
                                    
                                })
                        }
                    </Carousel>
                </div>
            </div>
        )
    }
}
