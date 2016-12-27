import {Dispatcher} from 'flux';
import assign from 'object-assign';

export default assign(new Dispatcher() , {
	handleServerAction(action){
		var payload = {
			source: 'server',
			action: action
		};
		this.dispatch(payload);
	},
	handleViewAction(action){
		var payload = {
			source: 'view',
			action: action
		};
		this.dispatch(payload);
	}
})