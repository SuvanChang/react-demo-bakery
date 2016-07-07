import React from 'react'
import {Link} from 'react-router'
let FreecomA = React.createClass({
	render:function(){
		return (
				<div className="freecomA">
					<span className="cookie"><Link to="/cookie"><span className="comalogo"></span><span className="text">饼干</span></Link></span>
					<span className="bread"><Link to="/bread"><span className="comalogo"></span><span className="text">面包</span></Link></span>
					<span className="desert"><Link to="/desert"><span className="comalogo"></span><span className="text">茶点</span></Link></span>
					<span className="cake"><Link to="/cake"><span className="comalogo"></span><span className="text">蛋糕</span></Link></span>
				</div>
			)
	}
})

export default FreecomA