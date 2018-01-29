import React,{Component} from "react"

import {Scroll} from "../../common/scroll.js"

import center from "../../common/center.js"

//引入子组件
import Nowplaying from "../../components/homelist-com/nowplaying.js"
import Soonplaying from "../../components/homelist-com/soonplaying.js"
export default class Filmlist extends Component{
	constructor(){
		super();
		this.state = {
			selectTitle:"正在热映"
		}
	}
	render(){
		let show = "";
		if(this.state.selectTitle == "正在热映"){
			show = <Nowplaying/>
		}
		else if(this.state.selectTitle == "即将上映"){
			show = <Soonplaying/>
		}
		
		return (
			<div className="film-list">
				<div className="list-box">
					<ul className="list-nav">
						<li className= {this.state.selectTitle == "正在热映" ? "col" : ""} onClick={this.btnAction.bind(this,"正在热映")}>正在热映<span className={this.state.selectTitle == "正在热映" ? "active" : ""}></span></li>
						<li className= {this.state.selectTitle == "即将上映" ? "col" : ""} onClick={this.btnAction.bind(this,"即将上映")}>即将上映<span className={this.state.selectTitle == "即将上映" ? "active" : ""}></span></li>
					</ul>
					<div>
						{show}
					</div>
				</div>
			</div>
		)
	}
	btnAction(flag){
		this.state.selectTitle = flag;
		this.setState({
			selectTitle:this.state.selectTitle
		})
	}
	componentDidMount(){
//		let scroll = new Scroll(".film-list");
//		let film = document.querySelector(".film-list");
//		film.addEventListener("touchstart",()=>{
//			scroll.refresh();
//		})
//		
//		film.addEventListener("touchend",()=>{
//			if(scroll.offsetFin == scroll.maxScrollY){
//				console.log(1);
//			}
//		})
		
		let scroll = new IScroll(".film-list");
		scroll.on("scrollStart",()=>{
			scroll.refresh();
		})
		scroll.on("scrollEnd",()=>{
			if(scroll.y == scroll.maxScrollY){
				if(this.state.selectTitle == "正在热映"){
					center.$emit("refreshList");
					scroll.refresh();
				}
				else if(this.state.selectTitle == "即将上映"){
					center.$emit("refreshList1");
					scroll.refresh();
				}
				
			}

			
		})

	}
}
