import Dispatcher from '../dispatcher/AppDispatcher';
import keyMirror from 'keymirror';

var Actions = {
	TYPES: keyMirror({
		SET: null,
		ADD: null,
		REMOVE: null,
		UPDATE: null,
		SYNC: null,
		INIT: null,
		SYNC_ADD: null
	}),

	set: function(val){
		Dispatcher.handleViewAction({
			type: Actions.TYPES.SET,
			value: val
		})
	},
	init: function(){
		Dispatcher.handleViewAction({
			type: Actions.TYPES.INIT
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
	},
	sync: function(){
		Dispatcher.handleViewAction({
			type: Actions.TYPES.SYNC
		});
	},
	synAdd: function(val){
		Dispatcher.handleViewAction({
			type: Actions.TYPES.SYNC_ADD,
			value: val
		});
	}
}

module.exports = Actions;
