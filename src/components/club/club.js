import React from 'react'
import Latest from './latest'

let Club = React.createClass({
	getInitialState:function(){
		return{
			tag:'latest' //||'hot'||'focus'
		}
	},
	handleClick:function(e){
		let str = e.target.id
		this.setState({tag:str})
		for(let p in this.refs){
			let clstr = this.refs[p].className
			let nstr = clstr.replace(/active/,'')
			this.refs[p].className = nstr
		}
		e.target.className += ' active'
		e.stopPropagation()
		e.preventDefault()
	},
	render:function(){
		let that = this
		let innermodule = function(){switch(that.state.tag){
			case 'latest':return <Latest />;
			case 'hot': return <div>SOMETHING 2</div>;
			case 'focus':return <div>SOMETHING 3</div>;
			default : return <div>SOMETHING WRONG</div>
		}}()
		return (
				<div className="club">
					<nav >
						<span id="latest" ref="latest" className="tag active" onClick={this.handleClick}>最新</span>
						<span id="hot" ref="hot" className="tag" onClick={this.handleClick}>热门</span>
						<span id="focus" ref="focus" className="tag" onClick={this.handleClick}>关注</span>
					</nav>
					{innermodule}
				</div>
			)
	}
})

export default Club