import React, {Component} from "react"

import {Link, NavLink} from "react-router-dom"

export default class Header extends Component{
    constructor(){
        super();
        this.state = {
            isShowCode:false
        }
    }
    render(){
        return(
            <div className="header">
              <div className="main clear">
                  <ul className="left-city">
                      <li className="with-padding">
                          深圳
                      </li>
                      <li className="sep-lines"></li>
                      <li className="change-city">
                          <NavLink to="/changeCity">切换城市
                            <span className="arrow-down iconfont icon-icon"></span>                          
                          </NavLink>
                      </li>
                  </ul>
                  {/*右边导航*/}
                  <ul className="right-nav first-level">
                      <li className="login">
                        <NavLink to="/login">登录</NavLink>
                        <span className="sep-lines"></span>
                      </li>
                      <li className="reg">
                        <NavLink to="/register">注册</NavLink>
                        <span className="sep-lines"></span>
                      </li>
                      <li onMouseEnter={this.showCode.bind(this)} className="tel-nuomi">
                        <NavLink to="/register">手机糯米
                            <span className="arrow-down iconfont icon-icon"></span>
                        </NavLink>
                        <span className="sep-lines"></span>
                      </li>
                      <li className="my-order">
                        <NavLink to="/my-order">我的订单</NavLink>
                        <span className="sep-lines"></span>
                      </li>
                      <li onMouseLeave={this.hideCode.bind(this)} onMouseEnter={this.showCode.bind(this)} className="tel-nuomi">
                        <NavLink to="/register">我的糯米
                            <span className="arrow-down iconfont icon-icon"></span>
                        </NavLink>
                        <span className="sep-lines"></span>
                      </li>
                      <li onMouseEnter={this.showCode.bind(this)} className="tel-nuomi">
                        <NavLink to="/register">最近浏览
                            <span className="arrow-down iconfont icon-icon"></span>
                        </NavLink>
                        <span className="sep-lines"></span>
                      </li>
                      <li onMouseEnter={this.showCode.bind(this)} className="tel-nuomi">
                        <NavLink to="/register">我是商家
                            <span className="arrow-down iconfont icon-icon"></span>
                        </NavLink>
                        <span className="sep-lines"></span>
                      </li>
                      <li className="reg">
                        <NavLink to="/register">帮助中心</NavLink>
                        <span className="sep-lines"></span>
                      </li>
                      <li onMouseEnter={this.showCode.bind(this)} className="tel-nuomi">
                        <NavLink to="/register">关注
                            <span className="arrow-down iconfont icon-icon"></span>
                        </NavLink>
                        <span className="sep-lines"></span>
                      </li>
                      <li className="reg">
                        <NavLink to="/register">收藏</NavLink>
                        <span className="sep-lines"></span>
                      </li>
                      <li className="reg">
                        <NavLink to="/register">食品安全</NavLink>
                      </li>         

                  </ul>
              </div>
            </div>
        )
    }
    showCode(){
        console.log("二维码");
    }
    hideCode(){
        console.log("衣橱");
    }


}
