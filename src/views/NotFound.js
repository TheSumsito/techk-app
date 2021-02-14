import React, { Component } from 'react'

// * ASSETS
import Error400 from "../assets/img/404.jpg"
import Header from '../components/Header'

export default class NotFound extends Component {
    render() {
        return (
            <div className="container">
                <div className="image-notfound">
                    <img src={Error400} />
                </div>
            </div>
        )
    }
}
