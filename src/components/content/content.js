import React from 'react'

import ContentBox from './contentbox'

let imgdata = require('../../data/contentboxImg.json')

let imgurl = function(imgdata){
	let imgsInfo = []
	imgdata.forEach(function(item,index){
	 imgsInfo[index] = require('../../images/contentbox/'+item.filename)
	})
	return imgsInfo
}(imgdata)

let Content = React.createClass({
	render:function(){
		let contentbox = []
		for (let i = 0; i < imgdata.length; i++) {
			contentbox[i] = <ContentBox key={'ctb_'+i} src = {imgurl[i]} title={imgdata[i].title} article={imgdata[i].article}/>
		}
		return <div className="content">
				{contentbox}
		</div>
	}
})

export default Content