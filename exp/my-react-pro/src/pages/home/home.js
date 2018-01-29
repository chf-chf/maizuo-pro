import React, {Component} from "react"

//引入子组件
import Header from "../../components/homepage/header"
import Search from "../../components/homepage/searchPart"

export default class Home extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <div id="home">
                    <Header/>
                    <Search/>
                </div>
            </div>
        )
        
    }
}