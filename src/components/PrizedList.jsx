import React from 'react';
import Prize from '../utils/Prize';

export default React.createClass({
	getInitialState(){
		return {
			prized: {name: '一等奖' , prize: '500RMB', members:['刘瑞云','张灿茂']}
		}
	},
	componentDidMount(){
		console.info('did mount');
	},
	componentWillUnmount(){
		console.info('unmount');
	},
	render(){
		return (
			<div className="prized-container">
				<h2>{this.state.prized.name}</h2>
				<h4>奖品：{this.state.prized.prize} /人</h4>
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
