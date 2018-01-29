import React, {Component} from "react"

import {BrowserRouter} from "react-router-dom"
import Home from "./pages/home/home"

export default class App extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <BrowserRouter>
                <div id="root">
                    <Home/>
                </div>
            </BrowserRouter>
        )
    }
}