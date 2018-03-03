import {ADD,DEL,ADD_DEFAULT_ITEM,CHANGE_DONE} from '../actions/item';
import {api} from '../utils/api';
const DEFAULT_ITEM = null;

export default (state = DEFAULT_ITEM,action) =>{
	switch(action.type) {
		case ADD_DEFAULT_ITEM :
			return  [...action.items]; 

		case ADD:	
			return [...state,api.addItem(state,action.item)];

		case CHANGE_DONE: {
			let idItem = Number(action.id),
				stateNew = state.map((item)=>{
					if( item.id===idItem) {
						item.done = !item.done;
					}
					return item;
				});	
			api.setItems(stateNew);
			return stateNew;
		}

		case DEL: {
			let stateNew = [...state];
			for(let key in stateNew) {
				if(Number(stateNew[key].id) ===Number(action.id)) {
					stateNew.splice(key,1);
				}
			}
			api.setItems(stateNew);
			return stateNew;	
		}
	}
	return state;
}

