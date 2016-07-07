/*header right drop menu*/
import React from 'react'

let Dropmenu = React.createClass({
	render:function(){

		return (
				<div className="dropmenuContain">
					<span className={this.props.type}></span>
				</div>
			)
	}
})

export default Dropmenu