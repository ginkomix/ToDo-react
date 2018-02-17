import React from "react";
import Table from "./components/Table";
import ToDoForm from "./components/ToDoForm";
import Filter from "./components/Filter"
import {api} from "./utils/api"
import "./App.css";
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			item: null,
			completed:false,
			text: '',
			dataMax: 0,
			dataMin: 0

		}
	}

	changeFilter = (filt,text)=> {
		switch(text) {
			case 'done':
				this.setState({
					completed: filt	
				});
				break;
			case 'text': 
				this.setState({
					text: filt	
				});
				break;
			case 'data': 
				this.setState({
					dataMax: filt[1],
					dataMin: filt[0]
				});
				break;
			default:
				return;
		}



	}

	getFilterItems() {
		let arr = [...this.state.item];
		if(!this.state.completed) {
			arr = arr.filter((item)=>!item.done);
		}
		if(this.state.text!=='') {

			arr = arr.filter((item)=>{

				if(item.title.includes(this.state.text) || item.description.includes(this.state.text)) {
					return true;
				} 
			});
		}
		
		if(this.state.dataMax) {
			
			arr = arr.filter((item)=>{
				
				if(Date.parse(this.state.dataMax)>Date.parse(item.date)) {
					return true;
				}
			})
		}
		if(this.state.dataMin) {
			arr = arr.filter((item)=>{
				if(Date.parse(this.state.dataMin)<Date.parse(item.date)) {
					return true;
				}
			})
		}
		return arr ;
	}

renderLoad() {
	return (
		<p>Load</p>	
	)
}

componentWillMount() {
	api.getItems()
		.then((items)=>{
		this.setState({
			item: items
		});
	});

}

setItem =(title,priorety,data,description)=> {
	api.addItem(title,priorety,data,description)
		.then((newInf)=>{

		this.setState({
			item:newInf
		});

	});
}

changeDone = (id)=> {
	api.changeItems(id).then((inf)=>{

		this.setState({
			item: inf
		})
	});
}

renderTable() {		
	return (
		<Table change={this.changeDone} items = {this.getFilterItems() }/>
	)
}

render() {
	return (
		<div>
			<h2>Add task</h2>
			<ToDoForm  clickFunction={this.setItem}/>
			<h2>Filter</h2>
			<Filter change={this.changeFilter}/>
			<h2>ToDo</h2>
			{this.state.item ? this.renderTable() : this.renderLoad()}
		</div>
	);
}
}

export default App;
