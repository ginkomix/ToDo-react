import React from 'react';
import {connect} from 'react-redux';
import {check} from '../../actions/filter';

class Filter extends React.Component {
	constructor() {
		super();
		this.state = {
			check: false	
		}
	}

	changeForm = (ev)=> {

		let target =  ev.target;
		switch(target.type) {
			case 'checkbox':
				this.props.check();
				break;
			case 'text':	
				this.findeText(target);
				break;
			case 'date':	
				this.dataFinde();
				break;
			default: return;
		}
	}



dataFinde() {
	let data = [];
	data.push(document.querySelector('#dataMin').value);
	data.push(document.querySelector('#dataMax').value);
	this.props.change(data,'data');
}

findeText(target) {
	this.props.change(target.value,'text');
}






	render() {
		return(
			<form onChange={this.changeForm}>
				<input type="checkbox" checked={this.props.filter.check}/>
				<input id="searchText"  type="text"/>
				<input id="searchDataMin" id="dataMin" type="date" />
				<input id="searchDataMax" id="dataMax" type="date" />
			</form>	

		)



	}
}
export default connect(state=>({
	filter: state.filter
}),{
	check
})(Filter);