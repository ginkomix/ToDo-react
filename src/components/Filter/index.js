import React from 'react';

export default class Filter extends React.Component {
	constructor() {
		super();
		this.state = {
			check: false	
		}
	}
	
	changeForm = (ev)=> {
		
		let target =  ev.target;
		this.props.change(target.checked);	
		this.setState({
			check: !this.state.check
		});

	}
	
	
	render() {
		return(
			<form onChange={this.changeForm}>
				<input type="checkbox" checked={this.state.check}/>
				<input id="searchText"  type="text"/>
				<input id="searchDataMin" type="datetime-local" />
				<input id="searchDataMax" type="datetime-local" />
			</form>	

		)



	}




}