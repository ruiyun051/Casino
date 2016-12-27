import React from 'react';
import Store from '../stores/Store';

export default React.createClass({
	getInitialState(){
		return{
			
		}
	},
	handleChange(e){
		window.location.assign('#/prized');
	},
	render(){
		return (
			<div className="row btn-container">
				<button className="btn" onClick={this.handleChange}>{this.props.text}</button>
			</div>
		)
	}
});