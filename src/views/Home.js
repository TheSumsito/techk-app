import React, { Component } from 'react'

//styles
import "../assets/css/home.css"

//Components
import Films from "../components/Films";


export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <Films />
            </div>
        )
    }
}
