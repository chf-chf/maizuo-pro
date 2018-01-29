import React,{Component} from "react"

import {Link} from "react-router-dom"

import center from "../../common/center.js"

import {getHotplayingInfo} from "../../services/homepage/homeservice.js"
export default class Nowplaying extends Component{
	constructor(){
		super();
		this.state = {
			page:1,
			count:7,
			list:[]
		}
	}
	render(){
		let listCon = this.state.list.map((item,index)=>{
			return (
				<Link key={index} to={"/home/hotfilmDetail/"+item.id}>
				<li>
					<div className="img">
						<img src={item.poster.origin} />
					</div>
					<div className="film-intro">
						<div className="film-arrow">
							<i className="iconfont icon-yousanjiao"></i>
						</div>
						<div className="film-grade">{item.grade}</div>
						<div className="film-name">
							{item.name}
						</div>
						<div className="film-introduce">
							{item.intro}
						</div>
						<div className="film-counts">
							<span className="film-color">{item.cinemaCount}</span>
							<span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="film-color">{item.watchCount}</span>
							<span>人购票</span>
						</div>
					</div>
				</li>
				</Link>
			)
		})
		
		return(
			<div className="now-playing">
				<ul className="list">
					{listCon}
				</ul>
			</div>
		)
	}
	componentDidMount(){
		let d = new Date();
		let interval = d.valueOf();
		
		getHotplayingInfo(interval,this.state.page,this.state.count)
		.then(result=>{
			console.log(result);
			this.setState({
				list:result
			})
		})
		
		center.$on("refreshList",()=>{
			this.state.page += 1;
			this.setState({
				page:this.state.page
			})
			getHotplayingInfo(interval,this.state.page,this.state.count)
			.then(result=>{
				this.state.list = this.state.list.concat(result);
				this.setState({
					list:this.state.list
				})
			})
		})
	}
	
}