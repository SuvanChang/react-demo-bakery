import React from 'react'

let imgsInfo = require('../../data/imagesInfo.json')

let imgs = function(imgsInfo){
	let imgs = []
	imgsInfo.forEach(function(item,index){
		imgs[index] = require('../../images/carouselImg/'+item.filename)
	})
	return imgs
}(imgsInfo)

let Img = React.createClass({
	render:function(){
		return <img src={this.props.src} width="441px" height="248px"/>
	}
})

let Carousel = React.createClass({
	render:function(){
		let imgCpts = []
		for(let i = 0;i < imgs.length;i++){
			let active = ''
			if(i===0)active='active'
			imgCpts[i] = <div className={'item '+active} key={'icpt_'+i}>
				            <Img src={imgs[i]} alt="" />
				        </div>
		}
		let control = []
		for(let i = 0;i < imgs.length;i++){
			control[i] = <li key={'ctl'+i} data-target="#ad-carousel" data-slide-to={i} className="active"></li>
		}
		return (
				<div id="ad-carousel" className="carousel slide" data-ride="carousel">
				    <ol className="carousel-indicators">
				        {control}
				    </ol>
				    <div className="carousel-inner">
				        {imgCpts}
				    </div>
				</div>
			)
	}
})

export default Carousel