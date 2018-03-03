import {combineReducers} from 'redux';
import item from'./item';
import sort from'./sort';
import filter from './filter';
export default combineReducers({
	item,
	sort,
	filter
});