import {CHECK} from '../actions/filter'
const DEFAULT_STATE = {
		completed:false,
		text: '',
		dataMax: 0,
		dataMin: 0,
};
export default (state = DEFAULT_STATE,action) => {
	switch(action.type) {
		case CHECK :
			state.completed = !state.completed;
			return state;
			
	}
	
	
	
	return state;
}