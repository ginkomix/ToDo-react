import React from 'react';
import Filter from '../Filter'
class Table extends React.Component {

	renderTitel() {
		return(
			<tbody>
				<tr>
					<td>Done <div><button className="done 0">^</button><button className="done 1">v</button></div></td>
					<td>Title <div><button>^</button><button>v</button></div></td>
					<td>Priority <div><button>^</button><button>v</button></div></td>
					<td>Date <div></div><button>^</button><button>v</button></td>
				</tr>		
			</tbody>

		)
	}

	changeDone =(ev)=> {
		let target =ev.target.className;
		this.props.change(target);
	}

	renderPriority(priority) {
		let string ="";
		switch(priority) {
			case 0:
				string ="Lov";
				break;
			case 1:
				string ="Mid";
				break;
			case 2:
				string ="Max";
				break;

		}
		return string;
	}

renderTable() {
	return(
		<tbody>
			{ this.props.items.map((item)=> {
				return (<tr key = {item.id}>

						<td><input className = {item.id} type="checkbox" checked ={item.done} onChange={this.changeDone} /></td>
						<td>{item.title}</td>
						<td>{this.renderPriority(item.priority)}</td>
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