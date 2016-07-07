//header Left Messagebox
import React from 'react'
import {Link} from 'react-router'

let Messagebox = React.createClass({
	getInitialState:function(){
		return {
			tipsMes:true //data should be from redux
		}
	},
	handleClick:function(e) {
		this.setState({tipsMes:false})

		e.stopPropagation()
		e.preventDefault()
	},
	render:function(){
		let tipsMes = ''
		if(this.state.tipsMes){
			tipsMes = 'tipsMes'
		}
		return (
					<div className="mailboxContain" onClick={this.handleClick}>
						<Link id="mailbox" to="/bakeryclub"><span className="mailbox">
							<span className={tipsMes}></span>
						</span></Link>
					</div>
			)
	}
})

export default Messagebox