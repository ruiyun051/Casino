import React from 'react';
import axios from 'axios';
import PrizedList from '../components/PrizedList.jsx'; 
import StartButton from '../components/StartButton.jsx';

export default React.createClass({
	handleClick(){
		window.location.assign('#/');
	},
	render(){
		return(
			<div className="container">
				<div className="row text-center">
					<h1 className="header">恭喜下面获奖者</h1> 
				</div>
				<div className="row text-center">
					<PrizedList/>
				</div>
				<div className="row text-center">
					<button className="btn" onClick={this.handleClick}>重新摇奖</button>
				</div>
			</div>
		)
	}
})