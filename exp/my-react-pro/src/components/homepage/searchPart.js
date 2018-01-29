import React, {Component} from "react"
import {Link} from "react-router-dom"

export default class Search extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="search-part">
                <div className="search-bar">
                    <div className="logo-area">
                        <Link className="logo" to="/home">
                            <img className="logo-img" title="百度糯米" src="//gss0.bdstatic.com/8r1VfDn9KggZnd_b8IqT0jB-xx1xbK/static/common/nis_index/sub/img/logo_e53daea.png" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}