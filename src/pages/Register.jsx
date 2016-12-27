import React from 'react';

export default React.createClass({
	getInitialState(){
		return {
			name: null
		}
	},
	render(){
		return( 
			<div className="container form">
				<div className="row text-center">
					<h1 className="header">注册你的姓名</h1> 
				</div>
				<div className="row">
					<label>姓名</label>
					<input type="text" value={this.state.name}/>
				</div>
				<div className="row text-center">
					<button className="btn">保存姓名</button>
				</div>
			</div>
		)
	}
})