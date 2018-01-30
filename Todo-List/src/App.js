import React, {Component} from "react"
import _ from "lodash"

import Handle from "./Handle"
import List from './List'

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            infoArr:[]
        }
        
    }
    render(){
        return(
            <div id="root">
                <Handle handleAdd={this.handleAdd.bind(this)}/>
                <List handleDelete={this.handleDelete.bind(this)} data={this.state.infoArr}/>
            </div>
        )
    }
    handleAdd(info){
        // console.log(info);
        let infoArr2 = _.concat(this.state.infoArr,info);
        this.setState({
            infoArr:infoArr2
        },()=>{
            console.log(this.state.infoArr);
        })
        
    }
    handleDelete(index){
        
    }
}