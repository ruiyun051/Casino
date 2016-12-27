import React from 'react';
import assign from 'object-assign';
import Store from '../stores/Store';
import Actions from '../actions/Actions';

export default React.createClass({
	getInitialState(){

		return assign({
			addVal: ''
		},Store.get())
	},
	handleSaveClick(){
		window.location.assign('/');
	},
	componentDidMount(){
		Store.addListener('change' , this.changeEventHandler);
	},
	changeEventHandler: function(){
		this.setState(Store.get());
		console.info(Store.get());
	},
	handleAddChange(e){
		this.setState({
			addVal: e.target.value
		})
	},
	handleAddClick(e){
		Actions.add(this.state.addVal);
	},
	handleUpdateChange(e){
		Actions.update({
			model: 'member',
			data: {
				id: e.target.dataset.id,
				name: e.target.value
			}
		})
	},
	handleRemoveClick(e){
		var id = e.target.dataset.id;
		Actions.remove(id);
	},
	handleNameChange(e){
		Actions.update({
			model: 'rule',
			data: {
				name: e.target.value
			}
		});
	},
	handleNumChange(e){
		Actions.update({
			model: 'rule',
			data: {
				numbers: parseInt(e.target.value ,10)
			}
		});
	},
	handlePrizeChange(e){
		Actions.update({
			model: 'rule',
			data: {
				prize: e.target.value
			}
		});
	},
	render(){
		var self = this;
		return (
			<div className="container form">
				<div className="row">
					<h2>人员</h2>
					<ul>
					{
						this.state.members.map(function(m , key){
							return  <li key={m}>
										<div className="col-10"><input type="text" defaultValue={m} key={key} data-id={key} onChange={self.handleUpdateChange}/></div>
										<div className="col-2 text-right"><button className="del" key={key} data-id={key} onClick={self.handleRemoveClick}>-</button></div>
									</li>
						})
					}
					<li>
						<div className="col-10"><input type="text" onChange={this.handleAddChange}/></div>
						<div className="col-2 text-right"><button className="add" onClick={this.handleAddClick}>+</button></div>
					</li>
					</ul>
				</div>
				<div className="row">
					<h2>奖项</h2>
					<label>名称</label>
					<input type="text" defaultValue={this.state.rule.name} onChange={self.handleNameChange}/>
					<label>人数</label>
					<input type="number" min="1" max={this.state.members.length} defaultValue={this.state.rule.numbers} onChange={self.handleNumChange}/>
					<label>奖品</label>
					<input type="text" defaultValue={this.state.rule.prize} onChange={self.handlePrizeChange}/>
				</div>
				<div className="row text-center">
					<button className="btn" onClick={this.handleSaveClick}>保存设置</button>
				</div>
			</div>
		)
	}
})