import React, { Component } from 'react'
import App from "./App"
import Signup from "./components/user/signup"
import Login from "./components/user/login"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Resources from './components/Resources'

export class Main extends Component {

    render() {
        return (
            <Router>
            <div>
                <Route path="/signup" component={Signup} />
                <Route path="/home" component={App} />
                <Route path="/resources" component={Resources} />
            </div>
            </Router>
        )
    }
}

export default Main
