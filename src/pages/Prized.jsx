import React from 'react';
import PrizedList from '../components/PrizedList.jsx'; 
import StartButton from '../components/StartButton.jsx';

export default React.createClass({
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
					<StartButton text="重新摇奖"/>
				</div>
			</div>
		)
	}
})