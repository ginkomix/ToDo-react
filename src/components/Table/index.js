import React from 'react';

class Table extends React.Component {

	renderTitel() {
		return(
			<tbody>
				<tr>
					<td>Done</td>
					<td>Title</td>
					<td>Priority</td>
					<td>Date</td>
				</tr>		
			</tbody>

		)
	}
	
	changeDone =(ev)=> {
		let target =ev.target.className;
		this.props.change(target);
	}

	renderTable() {
		return(
			<tbody>
				{ this.props.items.map((item)=> {
					return (<tr key = {item.id}>
					
						<td><input className = {item.id} type="checkbox" checked ={item.done} onChange={this.changeDone} /></td>
						<td>{item.title}</td>
						<td>{item.priority}</td>
						<td>{`${item.date}`}</td>
					</tr>
				)})}
			</tbody>
		)
	}

	render() {
 
		return(
			<table>
			{this.renderTitel()}
				{this.renderTable()}

			</table>
		);
	}
}

export default Table;