import React from 'react'

let User = React.createClass({
	getInitialState:function(){
		return {
			signbool:false,//data should be from cookie
			sign:'未签到' // data should be from cookie
		}
	},
	handleClick:function(e) {
		if(this.state.signbool)return
		this.state.signbool = true
		this.setState({sign:'已签到'})
		this.refs.sign.className += ' signed'

		//set cookie and send ajax

		e.stopPropagation()
		e.preventDefault()
	},
	render:function() {
		return (
				<div className="myheader row">
					<div className="myptt col-xs-4"><img /></div>
					<div className="mymes col-xs-4">
						<p className="nickname">*咸鱼老弟*</p>
						<p className="mylikes">
							<span className="heart">*100*</span><span className="like">*666*</span>
						</p>
						<p className="member">*普通会员*</p>
					</div>
					<div className="signIn col-xs-4" onClick={this.handleClick}><span ref="sign" className="sgtxt">*{this.state.sign}*</span></div>
				</div>
			)
	}
})

let Mid = React.createClass({
	render:function(){
		return (
				<div className="mid row">
					<span className="myfocus col-xs-4">关注(*24*)</span>
					<span className="fans col-xs-4">粉丝(*24*)</span>
					<span className="colletion col-xs-4">收藏(*24*)</span>
				</div>
			)
	}
})

let Items = React.createClass({
	render:function(){
		return (
				<ul className="myitems">
					<li className="myitem">我的订单</li>
					<li className="myitem">购物车</li>
					<li className="myitem">收货地址</li>
					<li className="myitem">我的活动</li>
					<li className="myitem">会员俱乐部</li>
				</ul>
			)
	}
})

let My = React.createClass({
	render:function(){
		return (
				<div className="myindex">
					<User />
					<Mid />
					<Items />
				</div>
			)
	}
})

export default My