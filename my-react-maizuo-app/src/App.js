import React, {Component} from "react"

import {BrowserRouter,Route,Link,Router,Switch,Redirect,NavLink} from "react-router-dom"

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Home from "./pages/homepage/home.js"
import Film from "./pages/filmpage/film.js"
import Cinema from "./pages/cinemapage/cinema.js"
import Mall from "./pages/mallpage/mall.js"
import My from "./pages/mypage/my.js"
import Mzcard from "./pages/mzcardpage/mzcard.js"
import City from "./pages/citypage/city.js"

export default class App extends Component{
	constructor({history}){
		console.log(history);
		super();
		this.state = {
			navList:[
				{title:"首页",path:"/home",name:"卖座电影"},
				{title:"影片",path:"/home/now-playing",name:"卖座电影"},
				{title:"影院",path:"/cinema",name:"全部影院"},
				{title:"商城",path:"/mall",name:"卖座商城"},
				{title:"我的",path:"/my",name:"登录"},
				{title:"卖座卡",path:"/mzcard",name:"查询/绑定/激活卖座卡"}
			],
			isShow:false,
			selectNavIndex:0
		}
	}
	render(){
		let ali = this.state.navList.map((item,index)=>{
			return (
				<NavLink onClick={this.navAction.bind(this,index)} to={item.path} key={index}>
					<li>
						{item.title}
						<i className="iconfont icon-yousanjiao"></i>
					</li>
				</NavLink>
				
			)
		})
		
		let asideNav = this.state.isShow ? (
			<div className="aside-wrap">
				<div onClick={this.coverAction.bind(this)} className="cover"></div>
				<div className="aside-nav">
					<ul className="nav-list">{ali}</ul>
				</div>
			</div>
		) : "";
		
		return (
			<BrowserRouter>			
				<div id="root">
					<div className="top-nav">
						<div className="top-left">
							<div onClick={this.showAction.bind(this)} className="nav-icon">
								<i className="iconfont icon-daohang1"></i>
							</div>
							<div className="nav-title">{this.state.navList[this.state.selectNavIndex].name}</div>
						</div>
						<div className="top-right">
							<Link to="/city">
								<div className="city">
									<span>深圳</span>
									<span className="iconfont icon-icon"></span>
								</div>
							</Link>
							<div className="account">
								<i className="iconfont icon-zhanghu"></i>
							</div>
						</div>
					</div>
					<Switch>
						<Route path="/" exact render={()=>{
							return <Redirect to="/home"/>
						}} />
						<Route component={Home} path="/home" />
						<Route component={Film} path="/film" />
						<Route component={Cinema} path="/cinema" />
						<Route component={Mall} path="/mall" />
						<Route component={My} path="/my" />
						<Route component={Mzcard} path="/mzcard" />
						
						<Route component={City} path="/city"/>
					</Switch>
					
					
					{/*侧边导航栏*/}
					<ReactCSSTransitionGroup
			          transitionName="example"
			          transitionEnterTimeout={500}
			          transitionLeaveTimeout={500}>
						{asideNav}
					</ReactCSSTransitionGroup>
				</div>
			</BrowserRouter>
			
		)
	}
	
	//显示侧边导航栏
	showAction(){
		this.setState({
			isShow:!this.state.isShow 
		})
	}
	coverAction(){
		this.setState({
			isShow:false
		})
	}
	navAction(index){
		this.setState({
			isShow:!this.state.isShow,
			selectNavIndex:index
		})
	}
	
	
}
