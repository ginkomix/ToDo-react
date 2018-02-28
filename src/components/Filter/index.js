import React from 'react';

export default class Filter extends React.Component {
	constructor() {
		super();
		this.state = {
			check: false	
		}
	}

	showDone(target) {
		this.props.change(target.checked,'done');	
		this.setState({
			check: !this.state.check
		});
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

	changeForm = (ev)=> {

		let target =  ev.target;
		switch(target.type) {
			case 'checkbox':
				this.showDone(target);
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


	render() {
		return(
			<form onChange={this.changeForm}>
				<input type="checkbox" checked={this.state.check}/>
				<input id="searchText"  type="text"/>
				<input id="searchDataMin" id="dataMin" type="date" />
				<input id="searchDataMax" id="dataMax" type="date" />
			</form>	

		)



	}




}