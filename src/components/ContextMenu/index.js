import React from 'react';
import './index.css';
import {api} from "../../utils/api";
import { Button,Icon } from 'semantic-ui-react';
export default class ContextMenu extends React.Component {
	
	change = ()=> {
		let title = document.querySelector('#titleChange').value,
			priorety = document.querySelector('#prioretyChange').value,
			data = document.querySelector('#dataChange').value,
			description = document.querySelector('#descriptionChange').value;
			this.props.changeItem(this.props.itemId,title,priorety,data,description);
			this.props.idChangeMenu(0);
	}
	
	del = ()=> {
		this.props.delItem(this.props.itemId);
		this.props.idChangeMenu(0);
	}
	
	cancel=()=> {
		this.props.idChangeMenu(0);
	}
	 		
	render() {
		let key;
		for(key in api.inf) {
			if(Number(api.inf[key].id)===Number(this.props.itemId)) {
				break;
			}
		}
	
		return( 
			
			<div className="changeTask">
				<div>
					<input id="titleChange" defaultValue={api.inf[key].title}  type="text"/>
					<select id="prioretyChange" defaultValue={api.inf[key].priority} >
						<option value ="-1" disabled >Priority</option>
						<option  value="0">Low</option>
						<option value="1">Mid</option>
						<option value="2">Max</option>
					</select>
					<input id="dataChange" defaultValue={api.inf[key].date} type="date" />
				</div>
				<div>
					<textarea defaultValue={api.inf[key].description} id="descriptionChange">

					</textarea>
				</div>
				<div>
				<Button.Group size='tiny'>
					<Button color='green' onClick ={this.change}>Change</Button>
					 <Button.Or />
					<Button color='red' onClick = {this.del}>Delete</Button>
					 <Button.Or />
					<Button  color='green' onClick = {this.cancel}>Cancel</Button>
					</Button.Group>
				</div>
				</div>
		
		)
	}
	
	
	
	
}