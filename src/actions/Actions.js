import Dispatcher from '../dispatcher/AppDispatcher';
import keyMirror from 'keymirror';

var Actions = {
	TYPES: keyMirror({
		SET: null,
		ADD: null,
		REMOVE: null,
		UPDATE: null
	}),

	set: function(val){
		Dispatcher.handleViewAction({
			type: Actions.TYPES.SET,
			value: val
		})
	},
	add: function(val){
		Dispatcher.handleViewAction({
			type: Actions.TYPES.ADD,
			value: val
		})
	},
	remove: function(val){
		Dispatcher.handleViewAction({
			type: Actions.TYPES.REMOVE,
			value: val
		})
	},
	update: function(val){
		Dispatcher.handleViewAction({
			type: Actions.TYPES.UPDATE,
			value: val
		});
	}
}

module.exports = Actions;
