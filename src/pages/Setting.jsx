import React from 'react';
import assign from 'object-assign';
import Store from '../stores/Store';
import Actions from '../actions/Actions';

export default React.createClass({
	getInitialState(){

		return assign({
			addVal: '',
			saved: false
		},Store.get())
	},
	handleSaveClick(){
		this.setState({
			saved: false
		})
		Actions.sync();
	},
	componentDidMount(){
		Store.addListener('change' , this.changeEventHandler);
		Store.addListener('sync' , this.syncEventHandler);
		Actions.init();
	},
	syncEventHandler(e){
		console.info(e);
		this.setState({
			saved: true
		})
	},
	changeEventHandler: function(){
		this.setState(Store.get());
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
	handleHomeClick(e){
		window.location.assign('#/');
	},
	render(){
		var self = this , partial = null;
		if(this.state.saved){
			partial = '保存成功';
		}
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
					<input type="text" value={this.state.rule.name} onChange={self.handleNameChange}/>
					<label>人数</label>
					<input type="number" min="1" max={this.state.members.length} value={this.state.rule.numbers} onChange={self.handleNumChange}/>
					<label>奖品</label>
					<input type="text" value={this.state.rule.prize} onChange={self.handlePrizeChange}/>
				</div>
				<div clasName="row">
					{partial}
				</div>
				<div className="row text-center">
					<button className="btn" onClick={this.handleSaveClick}>保存设置</button>
				</div>
				<div className="row text-center">
					<button className="btn" onClick={this.handleHomeClick}>我要摇奖</button>
				</div>
			</div>
		)
	}
})