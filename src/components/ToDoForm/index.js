import React from 'react';

export default class ToDoForm extends React.Component {

	addItem = ()=>{
		let title = document.querySelector('#title').value,
			priorety = document.querySelector('#priorety').value,
			data = document.querySelector('#data').value,
			description = document.querySelector('#description').value;
		document.querySelector('#title').value = '';
		document.querySelector('#priorety').value = -1;
		document.querySelector('#data').value = '';
		document.querySelector('#description').value = '';
		this.props.clickFunction(title,priorety,data,description);
	}

	render() {
		return(
			<div className="addTask">
				<div>
					<input id="title"  type="text"/>
					<select id="priorety" >
						<option value ="-1" selected disabled>Priority</option>
						<option  value="0">Low</option>
						<option value="1">Mid</option>
						<option value="2">Max</option>
					</select>
					<input id="data" type="datetime-local" />
				</div>
				<div>
					<textarea id="description">

					</textarea>
				</div>
				<div>
					<button onClick={this.addItem} id="add">Add</button>
				</div>
			</div>

		)
	}
}