import React from 'react';
import Actions from '../actions/Actions';
import Store from '../stores/Store';


export default React.createClass({
	getInitialState(){
		return {
			name: null,
			error: false,
			saved: false
		}
	},
	componentDidMount: function(){
		Store.addListener('syncAdd' , this.syncAddEventHandler);
	},
	syncAddEventHandler(e){
		console.info(e);
		if(e.data.success){
			this.setState({
				saved: true,
				error: false
			})
		}else{
			this.setState({
				saved: false,
				error: true
			})
		}
	},
	handleChange(event){
		this.setState({
			name: event.target.value
		})
	},
	handleSaveClick(e){
		Actions.synAdd(this.state.name);
	},
	render(){
		var partial , partial2;
		if(this.state.error){
			partial = <div className="error">该人员已经存在，请勿重复提交</div>
		}
		if(this.state.saved){
			partial2 = <div>注册成功</div>
		}
		return( 
			<div className="container form">
				<div className="row text-center">
					<h1 className="header">注册你的姓名</h1> 
				</div>
				<div className="row">
					<label>姓名</label>
					<input type="text" value={this.state.name} onChange={this.handleChange}/>
					{partial}

				</div>
				<div className="row text-center">
					<button className="btn" onClick={this.handleSaveClick}>保存姓名</button>
				</div>
				{partial2}
			</div>
		)
	}
})