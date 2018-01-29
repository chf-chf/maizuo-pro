import React,{Component} from "react"

import {getBannerInfo} from "../../services/homepage/homeservice.js"

let bannerSwiper = null;
export default class Banner extends Component{
	constructor(){
		super();
		this.state = {
			bannerlist:[]
		}
	}
	render(){
		let banner = this.state.bannerlist.map((item,index)=>{
			return (
				<div key={index} className="swiper-slide">
					<img src={item.imageUrl} />
				</div>
			)
		})
		return (
			<div className="banner swiper-container">
				<div className="swiper-wrapper">
					{banner}
				</div>
			</div>
		)
	}
	
	componentDidMount(){
		let d = new Date();
		let interval = d.valueOf();
		console.log(interval);
		getBannerInfo(interval).then(result=>{
//			console.log(result);
			this.setState({
				bannerlist:result
			})
		})
		bannerSwiper = new Swiper(".banner",{
			loop:true,
			autoplay:2000,
			autoplayDisableOnInteraction:true
		});

	}
	componentDidUpdate(){
		bannerSwiper.update();
	}
}
