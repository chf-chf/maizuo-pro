import React,{Component} from "react"

import {Route} from "react-router-dom"

//引入子组件
import Banner from "../../components/home-com/banner.js"
import Hotplaying from "../../components/home-com/hotplaying.js"
import Comingsoon from "../../components/home-com/comingsoon.js"

//子页面
import HotfilmDetail from "./hotfilmDetail.js"
import Filmlist from "./filmlist.js"
import CinemaDetail from "./cinemaDetail.js"

export default class Home extends Component{
	constructor({history}){
		super();
		this.history = history;
	}
	render(){
		return (
			<div>
				<div id="home">
					<Banner/>
					<Hotplaying history={this.history}/>
					<Comingsoon/>
				</div>
							
				<Route path="/home/hotfilmDetail/:id" render={(match,history)=>{
					return <HotfilmDetail match={match} history={history}/>
				}} />
				
				<Route path="/home/now-playing" render={()=>{
					return <Filmlist/>
				}}/>
				
				<Route path="/home/hotfilmDetail/:id/cinema" render={({match})=>{
					return <CinemaDetail match={match}/>
				}}/>
				
			</div>
		)
	}
}
