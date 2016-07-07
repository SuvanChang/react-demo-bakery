import React from 'react'

// let Label = React.createClass({
// 	render:function(){
// 		return <span className="label">{this.props.text}</span>
// 	}
// })

let Img = React.createClass({
	render:function(){
		return <img src={this.props.src} />
	}
})

let Header = React.createClass({
	getInitialState:function(){
		return {
			likesbool:false,
			likes:666 //should be from this.props.likes
		}
	},
	handleClick:function(e){
		if(this.state.likesbool)return

		this.state.likesbool = true
		let nlks = this.state.likes + 1
		this.setState({likes:nlks})

		let	ncls = this.refs.likeicon.className
		ncls = ncls.replace(/pray*/,'')
		ncls += ' pray'

		this.refs.likeicon.className = ncls

		//should sen ajax to tell server likes addup

		e.stopPropagation()
		e.preventDefault()
	},
	commentHandle:function(e){


		e.stopPropagation()
		e.preventDefault()
	},
	render:function(){
		// let labels = []
		// let labelStrs = this.porps.labels.split(' ')
		// labelStrs.forEach((item,index) => {
		// 	labels[index] = <Label key={'lable_' + i} text = {item} />
		// })
		return (
				<div className="banerHeader">
						<img className="portrait" style={{display:'block'}}/>
						<div className="HeaderMes">
							<div className="HMtop">
								<span className="nickname">*咸鱼老弟*</span>
								<span className="releaseTime">*2016-7-6*</span>
							</div>
							<div className="HMbot">
								{/*labels*/}
								<span className="label">蛋糕</span>
								<span className="label">面包</span>

								<span className="say" onClick={this.commentHandle}><span className="sayicon"></span>评论</span>
								<span className="like"  ref="likeicon" onClick={this.handleClick}><span className="likeicon"></span><span >{this.state.likes}</span></span>
							</div>
						</div>
				</div>
			)
	}
})

let Content = React.createClass({
	render:function(){
		// let imgs = []
		// this.props.imgsUrls.forEach((item,index) => {
		// 	imgs[index] = <Img key={'imgs_' + index} src={this.props.item} />
		// })
		// let comments = []
		// this.props.comments.forEach((item,index) =>{
		// 	comments[index] = <p><span className="comname">{item.name}:</span><span className="comCtnt">{item.content}</span></p>
		// })
		return <div className="clubContent">
			<p className="saying">*啦啦啦啦啦啦啦啦啦啦啦啦*</p>
			<div className="dynaImgs">
				{/*imgs*/}
				<Img src="../../images/dynaImgs/1.jpg"/>
				<Img src="../../images/dynaImgs/2.jpg"/>
				<Img src="../../images/dynaImgs/3.jpg"/>
			</div>
			<div className="comment" ref="comment">
				{/*comments*/}
				<p><span className="comname">小萌子:</span><span className="comCtnt">哥哥好厉害，赞一个</span></p>
				<p><span className="comname">小萌子:</span><span className="comCtnt">哥哥好厉害，赞一个</span></p>
				<p><span className="comname">小萌子:</span><span className="comCtnt">哥哥好厉害，赞一个</span></p>
			</div>
		</div>
	}
})

let Dyna = React.createClass({
	render:function(){
		return <div className="dyna">
			<Header />
			<Content />
		</div>
	}
})

let Latest = React.createClass({
	render:function(){
		// let dynas = []
		// this.props.latestData.forEach((item,index) =>{
		// 	dynas[index] = <Dyna {item data} key={'dyna_' + index} />
		// })
		return <div className="baner">
			{/*dynas*/}
			<Dyna />
			<Dyna />
			<Dyna />
			<Dyna />
		</div>
	}
})
export default Latest