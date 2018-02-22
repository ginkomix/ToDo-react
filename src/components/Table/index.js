import React from 'react';
import {sort} from '../../utils/sort.js'
import { Button,Icon } from 'semantic-ui-react';
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
								 
								<Icon onClick={()=>this.sortBy(name)} name='caret up'/>
								<Icon  onClick={()=>this.sortBy('-'+name)} name='caret down'/>
							
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

	sortBy(sort) {
		this.setState({
			sort
		})
	}

	returnIdItem = (ev) => {
		if(ev.target.tagName==='INPUT') {
			return;
		}
		let id = ev.target.getAttribute('class');
		this.props.click(id);
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
					return (<tr onClick={this.returnIdItem} className={item.id} key = {item.id}>

							<td className={item.id}><input className = {item.id} type="checkbox" checked ={item.done} onChange={this.changeDone} /></td>
							<td className={item.id}>{item.title}</td>
							<td className={item.id}>{this.renderPriority(item.priority)}</td>
							<td className={item.id}>{item.date.toString()}</td>
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