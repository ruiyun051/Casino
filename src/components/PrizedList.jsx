import React from 'react';
import axios from 'axios';

export default React.createClass({
	getInitialState(){
		return {
			prized:{
				members: [],
				rule: {}
			}
		}
	},
	componentDidMount(){
		var self = this;
		axios.get('/api/prized/get').then(function(res){
			var prized = res.data;
			self.setState({
				prized: prized
			})
		});
	},
	componentWillUnmount(){
		console.info('unmount');
	},
	render(){
		return (
			<div className="prized-container">
				<h2>{this.state.prized.rule.name}</h2>
				<h4>奖品：{this.state.prized.rule.prize} /人</h4>
				<h4>{this.state.prized.date}</h4>
				<ul>
				{
					this.state.prized.members.map(function(m){
						return <li>{m}</li>
					})
				}
				</ul>
			</div>
		)
	}
});
