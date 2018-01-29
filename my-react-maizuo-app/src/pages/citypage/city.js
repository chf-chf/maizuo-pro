import React,{Component} from "react"

import {getCityInfo} from "../../services/homepage/homeservice.js"

export default class City extends Component{
	constructor(){
		super();
		this.state = {
			citylist:[]
		}
	}
	render(){
		let letterlist = this.state.citylist.map((item,index)=>{
			return (
				<li key={index}>{item.letter}</li>
			)
		})
		let indexCity = this.state.citylist.map((item,index)=>{
			return (
				<div key={index}>
					<div className="index-letter">{item.letter}</div>
					<div className="index-detail">
						<ul>
							{item.map((list,index)=>{
								return(
									<li key={index}>{list.name}</li>
								)
							})}
							
						</ul>
					</div>
				</div>
			)
		})
		return (
			<div id="city">
				<div className="location-top">
					<div className="location-city">GPS定位你所在的城市</div>
					<div className="city-title">
						<ul>
							<li>深圳</li>
						</ul>
					</div>
					
				</div>
				<div className="hot-city">
					<div className="hot-city-txt">热门城市</div>
					<div className="hot-city-title">
						<ul>
							<li>北京</li>
							<li>上海</li>
							<li>广州</li>
							<li>深圳</li>						
						</ul>
					</div>
				</div>
				<div className="index-city">
					<div>
						<div className="orderInletter">按字母排序</div>
						<div className="letters">
							<ul>
								{letterlist}
							</ul>
						</div>
					</div>
					<div className="index-city-list">
						{indexCity}
					</div>
				</div>
			</div>
		)
	}
	componentDidMount(){
		let d = new Date();
		let interval = d.valueOf();
		getCityInfo(interval).then(result=>{
			console.log(result);
			this.setState({
				citylist:result
			})
		})
	}
}
