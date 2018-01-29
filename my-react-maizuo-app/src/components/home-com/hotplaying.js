import React, {Component} from "react"

import {Link} from "react-router-dom"

import {getHotplayingInfo} from "../../services/homepage/homeservice.js"

export default class Hotplaying extends Component{
	constructor(){
		super();
		this.state = {
			page:1,
			count:5,
			hotlist:[]
		}
	}
	render(){
		let list = this.state.hotlist.map((item,index)=>{
			return (
				
				<li key={index}>
					<Link to={"home/hotfilmDetail/"+item.id}>
						<div className="list-con">
							<img src={item.cover.origin} />
							<div className="text">
								<p className="name">{item.name}</p>
								<p className="count">
									<span>{item.cinemaCount}家影院上映  </span>
									<span>{item.watchCount}人购票</span>
								</p>
								<p className="grade">{item.grade}</p>
							</div>
						</div>
					</Link>
				</li>
				
			)
		})
		
		return (
			<div className="hotplaying">
				<ul className="hot-list">
					{list}
				</ul>
				<div className="hot-bottom">
					<div onClick={this.toNowplaying.bind(this)} className="more-films">
						更多热映电影
					</div>
				</div>
			</div>
		)
	}
	
	componentDidMount(){
		let d = new Date();
		let interval = d.valueOf();
		getHotplayingInfo(interval,this.state.page,this.state.count)
		.then(result=>{
			this.setState({
				hotlist:result
			})
		})
	}
	toNowplaying(){
		this.props.history.push("/home/now-playing");
	}
	
}
