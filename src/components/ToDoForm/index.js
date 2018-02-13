import React from 'react';

export default class ToDoForm extends React.Component {
	
	addItem = ()=>{
	let inf = document.querySelector('#mainInput').value;
		this.props.clickFunction(inf);
	}
	
	render() {
		return(
		<div>
			<input id="mainInput" type="text"/>
			<button onClick={this.addItem} id="add">Add</button>
		</div>
		
		)
	}
}