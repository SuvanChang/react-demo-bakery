require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import {Router,Route,browserHistory } from 'react-router'
import {Provider} from 'react-redux'

import Header from './header/header'
import Footer from './footer/footer'

import Unslider from './slider/slider'
import FreeComA from './freecoms/FreeComA'
import Content from './content/content'

import Clubcontent from './club/club'

import My from './my/my'

let AppComponent = React.createClass({
	render:function(){
		return (
				<div>
					{this.props.children}
					<Footer />
				</div>
			)
	}
})

let Index = React.createClass({
	render:function(){
		return (
				<div className="index">
					<Header title="首页" type="dropmenu"/>
					<Unslider />
					<FreeComA />
					<Content />
				</div>
			)
	}
})

let Club = React.createClass({
	render:function(){
		return (
				<div className="club">
					<Header title="烘培圈" type="plus"/>
					<Clubcontent />
				</div>
			)
	}
})

let Shop = React.createClass({
	render:function(){
		return (
				<div className="shop">
					<Header title="商城" type="plus"/>
				</div>
			)
	}
})

let Myindex = React.createClass({
	render:function(){
		return (
				<div >
					<Header title="我的" type="plus"/>
					<My />
				</div>
			)
	}
})

class App extends React.Component {
  render() {
    return (
      	<Router history={browserHistory }>
      		<Route component={AppComponent} >
      			<Route path='/' component={Index}/>
      			<Route path='/bakeryclub' component={Club} />
      			<Route path='/my' component={Myindex} />
      			<Route path='/shop' component={Shop} />
      		</Route>
      	</Router>
    );
  }
}

App.defaultProps = {
};

export default App;
