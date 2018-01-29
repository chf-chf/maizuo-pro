import React,{Component} from "react"

import {getAllCinemaInfo} from "../../services/homepage/homeservice.js"

export default class Cinema extends Component{
	constructor(){
		super();
		this.state = {
			cinemalist:[],
			selectIndex:0,
			isShow:false
		}
	}
	render(){
		
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
								return(
									<li key={index}>
										<div className="content-box">
											<div className="cinema-info">
												<div className="cinema-name">
													<i>{list.name}</i>
													<i className="iconfont icon-zuowei"></i>
													<i className="iconfont icon-tong"></i>
												</div>
												{cinemaTip}
												<span className="cinema-address">{list.address}</span>
												<div className="cinema-distance">距离未知</div>
											</div>
											<span className="right-arrow">
												<i className="iconfont icon-yousanjiao"></i>
											</span>
										</div>
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
			<div id="cinema">
				{cinema}
			</div>
		)
	}
	componentDidMount(){
		let d = new Date();
		let interval = d.valueOf();
		getAllCinemaInfo(interval).then(result=>{
			console.log(result);
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
}