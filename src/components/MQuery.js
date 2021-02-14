import React, { Component } from 'react'
import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default class MQuery extends Component {
    render() {
        return (
            <React.Fragment>
                <MediaQuery minWidth={1281}>
                    <Carousel
                        arrows
                        slidesPerPage={5}
                        slidesPerScroll={1}
                        infinite >
                        {
                            this.props.status &&
                                this.props.series.map(x=>{
                                    return (
                                        <Link to={'/detail/'+x.imdbID} className="image">
                                            <img src={x.Poster} />
                                        </Link>
                                    )
                                    
                                })
                        }
                    </Carousel>
                </MediaQuery>
                <MediaQuery minWidth={1025} maxWidth={1280}>
                    <Carousel
                            arrows
                            slidesPerPage={5}
                            slidesPerScroll={1}
                            infinite >
                            {
                                this.props.status &&
                                    this.props.series.map(x=>{
                                        return (
                                            <Link to={'/detail/'+x.imdbID} className="image">
                                                <img src={x.Poster} />
                                            </Link>
                                        )
                                        
                                    })
                            }
                    </Carousel>
                </MediaQuery>
                <MediaQuery minWidth={768}  maxWidth={1024}>
                    <Carousel
                            arrows
                            slidesPerPage={4}
                            slidesPerScroll={1}
                            infinite >
                            {
                                this.props.status &&
                                    this.props.series.map(x=>{
                                        return (
                                            <Link to={'/detail/'+x.imdbID} className="image">
                                                <img src={x.Poster} />
                                            </Link>
                                        )
                                        
                                    })
                            }
                    </Carousel>
                </MediaQuery>
                <MediaQuery minWidth={481}  maxWidth={767}>
                    <Carousel
                            arrows
                            slidesPerPage={3}
                            slidesPerScroll={1}
                            infinite >
                            {
                                this.props.status &&
                                    this.props.series.map(x=>{
                                        return (
                                            <Link to={'/detail/'+x.imdbID} className="image">
                                                <img src={x.Poster} />
                                            </Link>
                                        )
                                        
                                    })
                            }
                    </Carousel>
                </MediaQuery>
                <MediaQuery minWidth={320}  maxWidth={480}>
                    <Carousel
                            arrows
                            slidesPerPage={1}
                            slidesPerScroll={1}
                            infinite >
                            {
                                this.props.status &&
                                    this.props.series.map(x=>{
                                        return (
                                            <Link to={'/detail/'+x.imdbID} className="image">
                                                <img src={x.Poster} />
                                            </Link>
                                        )
                                        
                                    })
                            }
                    </Carousel>
                </MediaQuery>
            </React.Fragment>
        )
    }
}
