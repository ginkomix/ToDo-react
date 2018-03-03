import React from 'react';
import {sort} from '../../utils/sort.js'
import { Button,Icon } from 'semantic-ui-react';
import  { connect } from 'react-redux';
import {defaultItem,changeDone} from '../../actions/item';
import {sortBy} from '../../actions/sort';
import {api} from '../../utils/api';
class Table extends React.Component {
	constructor(props) {
		super(props);
		this.title = ["done", "title", "priority", "date"];
	}

	componentWillMount() {
		api.getItems()
			.then((state)=>{
			
			this.props.defaultItem(state);
		});
	}

	renderTitel() {
		return(
			<tbody>
				<tr>
					{this.title.map((name,index)=>{

						return (
							<td key={index}>
								{name} 

								<Icon onClick={()=>this.props.sortBy(name)} name='caret up'/>
								<Icon  onClick={()=>this.props.sortBy('-'+name)} name='caret down'/>

							</td>

						)})}
				</tr>		
			</tbody>

		)
	}
	changeDone = (ev)=> {
		let target =ev.target.className;
		this.props.changeDone(target);
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
				{ sort.sortBy(this.props.list,this.props.sort).map((item)=> {
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

	renderLoad() {
		return (
			<p>Load</p>	
		)
	}

	render() {

		return(
			<table>
				{this.renderTitel()}
				{this.props.list?this.renderTable():this.renderLoad()}

			</table>
		);
	}
	}


	export default connect(state=>({
		list: state.item,
		sort: state.sort
	}),{
		defaultItem,
		sortBy,
		changeDone
	})(Table);