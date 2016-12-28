import React from 'react';
import axios from 'axios';

export default React.createClass({
	componentDidMount(){
		axios.get('/api/prize/open').then(function(res){
			setTimeout(function(){
				window.location.assign('#/prized');
			},5000)
			
		})
	},
	render(){
		return (
			<div className="container">
				<div className="row text-center">
					<h2>当时我和红包只差0.01公分</h2>
				</div>
				<div className="row text-center">
					<img src="/img/20161228182428.gif"/>
				</div>
			</div>
		)
	}
})