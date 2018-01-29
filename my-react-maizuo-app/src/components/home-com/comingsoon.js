import React, {Component} from "react"
import {Link} from "react-router-dom"
import {getComingsoonInfo} from "../../services/homepage/homeservice.js"

export default class Comingsoon extends Component{
	constructor(){
		super();
		this.state = {
			page:1,
			count:3,
			cominglist:[]
		}
	}
	render(){
		let list = this.state.cominglist.map((item,index)=>{
			let interval = parseInt(item.premiereAt);
			let d = new Date(interval);
			let month = d.getMonth() + 1;
			let day = d.getDate();
			return (
				<Link key={index} to={"home/hotfilmDetail/"+item.id}>
				<li>
					<div className="coming-con">
						<img src={item.cover.origin} />
						<div className="coming-text">
							<p>{item.name}</p>
							<p className="coming-time">
								<span>{month}月{day}日上映</span>
							</p>
						</div>
					</div>
				</li>
				</Link>
			)
		})
		
		return (
			<div className="coming-soon">
				<div className="coming-title">
					<p>即将上映</p>
				</div>
				<ul className="coming-list">
					{list}
				</ul>
				<div className="coming-bottom">
					<div className="more-coming-films">
						更多即将上映电影
					</div>
				</div>
			</div>
		)
	}
	
	componentDidMount(){
		let d = new Date();
		let interval = d.valueOf();
		getComingsoonInfo(interval,this.state.page,this.state.count)
		.then(result=>{
			console.log(result);
			this.setState({
				cominglist:result
			})
		})
	}
}
