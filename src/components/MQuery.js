// * DEPENDENCIES
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Icon from 'react-fa';

export default class MQuery extends Component {
    render() {
        return (
            <React.Fragment>
                
                {/* MIN : 1281px */}
                <MediaQuery minWidth={1281}>
                    <Carousel
                        arrows
                        slidesPerPage={5}
                        slidesPerScroll={1}
                        infinite 
                        autoPlay={3000}
                        arrowLeft={<Icon className="arrow-left" name="arrow-left" />}
                        arrowRight={<Icon className="arrow-right" name="arrow-right" />}
                        addArrowClickHandler>
                        {
                            this.props.status &&
                                this.props.series.map(x=>{
                                    return (
                                        <Link to={'/detail/'+x.imdbID} key={x.imdbID} className="image">
                                            <img src={x.Poster} />
                                        </Link>
                                    )
                                    
                                })
                        }
                    </Carousel>
                </MediaQuery>

                {/* MIN: 1025px - MAX: 1280px */}
                <MediaQuery minWidth={1025} maxWidth={1280}>
                    <Carousel
                            arrows
                            slidesPerPage={5}
                            slidesPerScroll={1}
                            infinite 
                            autoPlay={3000}
                            arrowLeft={<Icon className="arrow-left" name="arrow-left" />}
                            arrowRight={<Icon className="arrow-right" name="arrow-right" />}
                            addArrowClickHandler>
                            {
                                this.props.status &&
                                    this.props.series.map(x=>{
                                        return (
                                            <Link to={'/detail/'+x.imdbID} key={x.imdbID} className="image">
                                                <img src={x.Poster} />
                                            </Link>
                                        )
                                        
                                    })
                            }
                    </Carousel>
                </MediaQuery>

                {/* MIN: 768px - MAX: 1024px */}
                <MediaQuery minWidth={768}  maxWidth={1024}>
                    <Carousel
                            arrows
                            slidesPerPage={4}
                            slidesPerScroll={1}
                            infinite 
                            autoPlay={3000}
                            arrowLeft={<Icon className="arrow-left" name="arrow-left" />}
                            arrowRight={<Icon className="arrow-right" name="arrow-right" />}
                            addArrowClickHandler>
                            {
                                this.props.status &&
                                    this.props.series.map(x=>{
                                        return (
                                            <Link to={'/detail/'+x.imdbID} key={x.imdbID} className="image">
                                                <img src={x.Poster} />
                                            </Link>
                                        )
                                        
                                    })
                            }
                    </Carousel>
                </MediaQuery>

                {/* MIN: 481px - MAX: 767px */}
                <MediaQuery minWidth={481}  maxWidth={767}>
                    <Carousel
                            arrows
                            slidesPerPage={3}
                            slidesPerScroll={1}
                            infinite 
                            autoPlay={3000}
                            arrowLeft={<Icon className="arrow-left" name="arrow-left" />}
                            arrowRight={<Icon className="arrow-right" name="arrow-right" />}
                            addArrowClickHandler>
                            {
                                this.props.status &&
                                    this.props.series.map(x=>{
                                        return (
                                            <Link to={'/detail/'+x.imdbID} key={x.imdbID} className="image">
                                                <img src={x.Poster} />
                                            </Link>
                                        )
                                        
                                    })
                            }
                    </Carousel>
                </MediaQuery>

                {/* MIN: 320px - MAX: 480px */}
                <MediaQuery minWidth={320}  maxWidth={480}>
                    <Carousel
                            arrows
                            slidesPerPage={1}
                            slidesPerScroll={1}
                            infinite 
                            autoPlay={3000}
                            arrowLeft={<Icon className="arrow-left" name="arrow-left" />}
                            arrowRight={<Icon className="arrow-right" name="arrow-right" />}
                            addArrowClickHandler>
                            {
                                this.props.status &&
                                    this.props.series.map(x=>{
                                        return (
                                            <Link to={'/detail/'+x.imdbID} key={x.imdbID} className="image">
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
