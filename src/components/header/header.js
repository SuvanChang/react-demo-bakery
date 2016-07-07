import React from 'react'

import Messagebox from './messagebox'
import Dropmenu from './dropmenu'

let Header = React.createClass({
	render:function() {
		return (
				<header>
					<Messagebox />
					<h2 className="headerTitle">{this.props.title}</h2>
					<Dropmenu type={this.props.type}/>
				</header>
			)
	}
})

export default Header