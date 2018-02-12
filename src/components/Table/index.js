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

	renderTable() {
		return(
			<tbody>
				{ this.props.items.map((item)=> {
					return (<tr key = {item.id}>
						<td>{item.done}</td>
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