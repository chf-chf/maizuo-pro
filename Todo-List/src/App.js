import React, {Component} from "react"
import _ from "lodash"

import Handle from "./Handle"
import List from './List'

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            infoArr:[],
            modifyInfo:null,
            modifyIndex:-1
        }
        
    }
    render(){
        return(
            <div id="root">
                <Handle modifyInfo={this.state.modifyInfo} handleModify={this.handleModify.bind(this)} handleAdd={this.handleAdd.bind(this)}/>
                <List handle={this.handle.bind(this)} data={this.state.infoArr}/>
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
    handle(index,flag){
        if(flag == "delete"){
            _.pullAt(this.state.infoArr,index);
            this.setState({
                infoArr:this.state.infoArr
            })
        }
        else if(flag == "modify"){
            let infoObj = this.state.infoArr[index];
            this.setState({
                modifyInfo:infoObj,
                modifyIndex:index
            })
        }
        
    }
    handleModify(modifiedInfo){
        console.log(modifiedInfo);
        _.find(this.state.infoArr,this.state.modifyIndex,modifiedInfo);
        this.setState({
            infoArr:this.state.infoArr,
            modifyInfo:null,
            modifyIndex:-1
        })
    }
}