import React,{Component} from "react"
import {Link} from "react-router-dom"
import center from "../../common/center.js"
import {getComingsoonInfo} from "../../services/homepage/homeservice.js"
export default class Soonplaying extends Component{
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
			let interval = parseInt(item.premiereAt);
			let d = new Date(interval);
			let month = d.getMonth()+1;
			let date = d.getDate();
			let day = d.getDay();
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
						<div className="film-counts film-soon-counts">
							<span className="film-color film-soon-color">{month}月{date}日上映</span>
							<span className="film-color film-soon-color">&nbsp;&nbsp;&nbsp;&nbsp;星期{day}</span>
						</div>
					</div>
				</li>
				</Link>
			)
		})
		return(
			<div className="soon-playing">
				<ul className="list">
					{listCon}
				</ul>
			</div>
		)
	}
	componentDidMount(){
		let d = new Date();
		let interval = d.valueOf();
//		this.setState({
//			page:this.state.page
//		})
		getComingsoonInfo(interval,this.state.page,this.state.count)
		.then(result=>{
			console.log(result);
			this.setState({
				list:result
			})
		})
		center.$on("refreshList1",()=>{
			this.state.page += 1;
			this.setState({
				page:this.state.page
			})
			getComingsoonInfo(interval,this.state.page,this.state.count)
			.then(result=>{
				this.state.list = this.state.list.concat(result);
				this.setState({
					list:this.state.list
				})
			})
		})
	}
}
