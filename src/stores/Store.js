import assign from 'object-assign';
import {EventEmitter} from 'events';
import Actions from '../actions/Actions';
import Dispatcher from '../dispatcher/AppDispatcher';

var _list = ['刘瑞云','张灿茂','游柏浩','吴胤旭','Mark','黄舟舟','王坤','朱嘉伟','张嘉建','杜佳鹏'];
var _rule = {
	name: '一等奖', numbers: 1 , prize: '100块' 
}

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
	}
})

module.exports = Store;