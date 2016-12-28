import React from 'react';
import StartButton from '../components/StartButton.jsx';

export default React.createClass({
	render(){
		return (
			<div className="container">
				<div className="row text-center">
					<h1 className="header">我要摇大奖</h1> 
				</div>
				<div className="row text-center">
					<div className="shake-img"></div>
				</div>
				<div className="row text-center">
					<StartButton text="开始摇奖"/>	
				</div>
				<div className="row">
					<a href="#/setting" className="link-setting pull-right">更改奖项和人员？</a>
				</div>
				<div className="row clear-fix">
					<a href="#/history" className="link-setting pull-right">历史中奖记录？</a>
				</div>
				
			</div>
		)
	}
})