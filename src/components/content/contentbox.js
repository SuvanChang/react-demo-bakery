import React from 'react'

let ContentBox = React.createClass({
	render:function(){
		return <figure>
				<img src={this.props.src} alt="load failure" title={this.props.article}/>
				<figCaption><h3>{this.props.title}</h3><p>{this.props.article}</p></figCaption>
		</figure>
	}
})

export default ContentBox