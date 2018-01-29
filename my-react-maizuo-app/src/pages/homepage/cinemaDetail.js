import React,{Component} from "react"

import {getFilmCinemaInfo,getCurrentCinemaInfo} from "../../services/homepage/homeservice.js"

export default class CinemaDetail extends Component{
	constructor(){
		super();
		this.state = {
			cinemalist:[],
			schedulelist:[],
			selectIndex:0,
			isShow:false,
			isDisplay:"none",
			selectIndex1:-1,
			isShow1:false
		}
	}
	render(){
		let d = new Date();
		let month = d.getMonth() + 1;
		let date = d.getDate();
		date = date > 9 ? date : "0"+date;
		
		let schedule = this.state.schedulelist.map((item,index)=>{
			let labels_tip = item.labels.length > 0 ? (<div className="labels-tip">
								<div className="tip_3">{item.labels[0].name}</div>
							</div>) : "";
//			let label_name = item.labels.length > 0 ? item.labels[0].name : "";
			let interval = parseInt(item.showAt);
			let d = new Date(interval);
			let hour = d.getHours();
			let min = d.getMinutes();
			min = min > 9 ? min : "0"+min;
			
			let interval1 = parseInt(item.stopSellingAt);
			let d1 = new Date(interval1);
			let hour1 = d1.getHours();
			let min1 = d1.getMinutes();
			return (
				<li className="schedule-detail" key={index}>
					<div className="schedule-detail-box">
						<div className="schedule-detail-arrow">
							<i className="iconfont icon-yousanjiao"></i>
						</div>
						<div className="schedule-detail-left">
							<div className="schedule-detail-price">
								<span>{"￥"+item.price.maizuo+".00"}</span>
							</div>
							{labels_tip}
							<div className="cinema-showtime">{hour+":"+min}</div>
							<div className="cinema-stoptime">{"预计"+hour1+":"+min1+"结束"+"/"+item.film.language+item.imagery+"/"+item.hall.name}</div>
							<div className="cinema-origin-price">{"￥"+item.price.cinema}</div>
						</div>
					</div>
				</li>
			)
		})
		
		let cinema = this.state.cinemalist.map((item,index)=>{
			let block = "";
			if(this.state.selectIndex == index && this.state.isShow){
				block = (
					<div className="content">
						<ul>
							{item.map((list,index)=>{
								let cinemaTip = "";
								if(list.labels.length == 0){
									cinemaTip = "";
								}
								else if(list.labels.length == 1){
									
									if(list.labels[0].name == "观影小食"){
										cinemaTip = (
											<span className="cinema-tip">										
												<i className="tip_1">可乐爆米花</i>
											</span>
										)
										
									}
									else{
										cinemaTip = (
											<span className="cinema-tip">										
												<i className="tip_2">{list.labels[0].name}</i>
											</span>
										)
										
									}
									
								}
								else if(list.labels.length == 2){
									cinemaTip = (
										<span className="cinema-tip">
											<i className="tip_1">可乐爆米花</i>
											<i className="tip_2">{list.labels[1].name}</i>
										</span>
									)
								}
								
								let block1 = "";
								if(this.state.selectIndex1 == index && this.state.isShow1){
									block1 = (
										<div className="cinema-schedule">
											<div className="schedule-date">
												<div className="schedule-date-item">今天是({month}/{date}日)</div>
											</div>
											<div className="schedule-list" >
												<ul>
													{schedule}
												</ul>
												
											</div>
										</div>
									)
								}
								
								return(
									<li className="cinema_li" key={index}>
										<div onClick={this.showAction.bind(this,list.id,index)} className="content-box">
											<div className="cinema-info">
												<div className="cinema-name">
													<i>{list.name}</i>
													<i className="iconfont icon-zuowei"></i>
													<i className="iconfont icon-tong"></i>
												</div>
												{cinemaTip}
												<span className="cinema-address">{list.address}</span>
												<div className="cinema-distance">
													<span>距离未知</span>
													<span> | 剩余{list.avaliableSchedule}场</span>
												</div>
											</div>
											<span className="right-arrow cinema-price">{list.minimumPrice == 0 ? "" : "￥" + list.minimumPrice}</span>
										</div>
										{block1}
									</li>
								)
							})}
						</ul>
					</div>
				)
			}
			
			return (
				<div key={index} className="district">
					<div onClick={this.areaAction.bind(this,index)}  className="title">
						<span>{item.area}</span>
					</div>
					
					{block}
				</div>
			)
		})
		return (
			<div id="cinema-detail">
				{cinema}
			</div>
		)
	}
	
	componentDidMount(){
		console.log(this.props.match);
		let d = new Date();
		let interval = d.valueOf();
		getFilmCinemaInfo(this.props.match.params.id,interval).then(result=>{
//			console.log(result);
			this.setState({
				cinemalist:result
			})
		})
	}
	areaAction(index){
		this.state.isShow = !this.state.isShow;
		this.setState({
			selectIndex:index,
			isShow:this.state.isShow
		})
	}
	showAction(cinema_id,index){
		console.log(cinema_id);
		console.log(index);
		let d = new Date();
		let interval = d.valueOf();
		getCurrentCinemaInfo(this.props.match.params.id,cinema_id,interval)
		.then(result=>{
			console.log(result);
			this.setState({
				schedulelist:result
			})
		})
		this.state.isShow1 = !this.state.isShow1;
		this.setState({
			selectIndex1:index,
			isShow1:this.state.isShow1
		})
	}
}
