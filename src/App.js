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
			item: null
		}
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
			<Table change={this.changeDone} items = {this.state.item}/>
		)
	}

	render() {
		return (
			<div>
			<h2>Add task</h2>
				<ToDoForm  clickFunction={this.setItem}/>
				<h2>Filter</h2>
				<Filter/>
				<h2>ToDo</h2>
				{this.state.item ? this.renderTable() : this.renderLoad()}
			</div>
		);
	}
}

export default App;
