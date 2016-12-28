import assign from 'object-assign';
import {EventEmitter} from 'events';
import axios from 'axios';
import Actions from '../actions/Actions';
import Dispatcher from '../dispatcher/AppDispatcher';

var _list = [] , _rule = {};

var Store = assign({} , EventEmitter.prototype , {
	get(){
		return {
			members: _list,
			rule: _rule
		}
	}
})

Store.dispatchToken = Dispatcher.register(function(payload){
	var action = payload.action;
	switch(action.type){
		case Actions.TYPES.ADD:
			if(_list.indexOf(action.value) < 0){
				_list.push(action.value);
				Store.emit('change');
			}
			break;
		case Actions.TYPES.REMOVE:
			_list.splice(action.value , 1);
			Store.emit('change');
			break;
		case Actions.TYPES.UPDATE:
			let opt = action.value;
			if(opt.model == 'member'){
				_list[opt.data.id] = opt.data.name;
			}else if(opt.model == 'rule'){
				_rule = assign(_rule , opt.data);
			}
			Store.emit('change');
			break;
		case Actions.TYPES.SYNC:
			axios.post('/api/store/set' , {
				members: _list,
				rule: _rule	
			}).then(function(res){
				Store.emit('sync' , res.data);
			})
			break;
		case Actions.TYPES.INIT:
			axios.get('/api/store/get').then(function(res){
				var data = res.data;
				_list = data.members;
				_rule = data.rule;
				Store.emit('change');
			})
			break;
		case Actions.TYPES.SYNC_ADD:
			axios.post('/api/store/add' , {name: action.value})
			.then(function(res){
				Store.emit('syncAdd' , res);
			})
			break;
	}
})

module.exports = Store;