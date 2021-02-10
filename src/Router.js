import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';



export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/home" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}
