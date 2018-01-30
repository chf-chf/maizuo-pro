import React, {Component} from "react"
import _ from "lodash"

import PropTypes from "prop-types"

export default class Handle extends Component{
    constructor(){
        super();
        this.state = {
            name:"",
            sex:"",
            age:""
        }
    }
    render(){
        return(
            <div className="handle">
				姓名:<input ref="name" onChange={this.inputChange.bind(this,"name")} type="text" value={this.state.name} placeholder="请输入姓名"/><br />
				性别:<input ref="sex" onChange={this.inputChange.bind(this,"sex")} type="text" value={this.state.sex} placeholder="请输入性别"/><br />
				年龄:<input ref="age" onChange={this.inputChange.bind(this,"age")} type="text" value={this.state.age} placeholder="请输入年龄"/><br />
				<button>取消</button>
				<button onClick={this.addAction.bind(this)}>新增</button>
				
			</div>
        )
    }
    inputChange(flag){
        let val = this.refs[flag].value;
        let obj = {};
        obj[flag] = val;
        this.setState(obj);
    }
    addAction(){
        this.props.handleAdd({
            name:this.state.name,
            sex:this.state.sex,
            age:this.state.age
        })
        this.setState({
            name:"",
            sex:"",
            age:""
        })
    }
}
Handle.proptypes = {
    handleAdd:PropTypes.func.isRequired
}