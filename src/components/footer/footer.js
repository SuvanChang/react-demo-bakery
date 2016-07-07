import React from 'react'
import {Link} from 'react-router'

let Footer = React.createClass({
	render:function(){
		return (
				<footer>
					<span className="course"><Link to="/"><span className="logo"></span><span className="text">教程</span></Link></span>
					<span className="bakeryclub"><Link to="/bakeryclub"><span className="logo"></span><span className="text">烘培圈</span></Link></span>
					<span className="shop"><Link to="/shop"><span className="logo"></span><span className="text">商城</span></Link></span>
					<span className="my"><Link to="/my"><span className="logo"></span><span className="text">我的</span></Link></span>
				</footer>
			)
	}
})
export default Footer