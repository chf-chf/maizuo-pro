import React,{Component} from "react"

import {getFilmdetailInfo} from "../../services/homepage/homeservice.js"

export default class HotfilmDetail extends Component{
	constructor(){
		super();
		this.state = {
			filmdetail:{}
		}
		
	}
	
	componentDidMount(){
		let d = new Date();
		let interval = d.valueOf();
		getFilmdetailInfo(interval,this.props.match.match.params.id)
		.then(result=>{
			console.log(result);
			this.setState({
				filmdetail:result
			})
		})
	}
	
	render(){
		let img = this.state.filmdetail.cover ? (<img src={this.state.filmdetail.cover.origin} />) : "";
		
		let actorlist = this.state.filmdetail.actors ? this.state.filmdetail.actors.map((item,index)=>{return (<span key={index}>{item.name}|</span>)}) : "";
		
		let interval = parseInt(this.state.filmdetail.premiereAt);
		let d = new Date(interval);
		let month = d.getMonth() + 1;
		let day = d.getDate();
		
		
		return (
			<div id="hotfilm-detail">
				<div className="film-img">
					{img}
				</div>
				<div className="film-info">
					<div className="film-intro">
						影片简介
					</div>
					<div className="film-director">
						<span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:</span>
						<span>{this.state.filmdetail.director}</span>
					</div>
					<div className="film-actors">
						<span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:</span>
						{actorlist}
					</div>
					<div className="film-area">
						<span>地区语言:</span>
						<span>{this.state.filmdetail.nation}(<span>{this.state.filmdetail.language}</span>)</span>
					</div>
					<div className="film-type">
						<span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</span>
						<span>{this.state.filmdetail.category}</span>
					</div>
					<div className="film-time">
						<span>上映日期:</span>
						<span>{month}月{day}日上映</span>
					</div>
					<div className="film-synopsis">
						{this.state.filmdetail.synopsis}
					</div>
					<div className="buy">
						<button onClick={this.btnAction.bind(this,this.props.match.match.params.id)} className="buy-btn">立即购票</button>
					</div>
				</div>
			</div>
		)
	}
	
	btnAction(id){
		console.log(this.props.match.history);
		this.props.match.history.push("/home/hotfilmDetail/"+id+"/cinema");
	}
	
}
