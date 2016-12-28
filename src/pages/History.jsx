import React from 'react';
import axios from 'axios';

var _list = [];
export default React.createClass({
	getInitialState(){
		return {
			histories: _list
		}
	},
	setList(list){
		_list = list;
		this.setState({
			histories: _list
		})
	},
	componentDidMount(){
		var self = this;
		axios.get('/api/prized/history/get').then(function(res){
			self.setList(res.data);
		})
	},
	handleDelClick(e){
		var id = e.target.dataset.id;
		var self = this;
		_list.splice(id , 1);
		axios.post('/api/prized/history/set', _list).then(function(res){
			console.info(res);
			self.setState(_list);
		})
	},
	handleHomeClick(e){
		window.location.assign('#/');
	},
	render(){
		var self = this;
		return(
			<div className="container">
				<div className="row">
					<h1>中奖记录</h1>
				</div>
				{
					this.state.histories.map(function(his , key){
						return <div className="row" key={key}>
									<div className="col-10">
										<p>{his.date}</p>
										<p>{his.members? his.members.join(',') : null}</p>
										<p>{his.rule.name},  {his.rule.prize}</p>
									</div>
									<div className="col-2 text-right"><button className="del"  data-id={key} onClick={self.handleDelClick}>-</button></div>
								</div>
					})
				}
				<div className="row text-center">
					<button className="btn" onClick={this.handleHomeClick}>我要摇奖</button>
				</div>
			</div>
		)
	}
})
