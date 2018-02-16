import React from 'react';
import {sort} from '../../utils/sort.js'
class Table extends React.Component {
	constructor() {
		super();
		this.title = ["done", "title", "priority", "date"];
		this.state = {
			sort:null
		}

	}
	renderTitel() {
		return(
			<tbody>
				<tr>
					{this.title.map((name,index)=>{
						
						return (
							<td key={index}>
								{name} 
								<button onClick={()=>this.sortBy(name)}>^</button>
								<button onClick={()=>this.sortBy('-'+name)}>v</button>
							</td>
 
						)})}
				</tr>		
			</tbody>

		)
	}

	changeDone =(ev)=> {
		let target =ev.target.className;
		this.props.change(target);
	}

	sortBy(name) {
		this.setState({
			sort: name
		})
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
		default:
			string ="Lov";
	}
	return string;
}

renderTable() {
	return(
		<tbody>
			{ sort.sortBy(this.props.items,this.state.sort).map((item)=> {
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