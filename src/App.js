import React from "react";
import Table from "./components/Table";
import ToDoForm from "./components/ToDoForm";
import {getItems,addItem} from "./utils/api"
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
		getItems()
			.then((items)=>{
			this.setState({
				item: items
			});
		});

	}

	setItem =(infAdd)=> {
		addItem(infAdd)
			.then((newInf)=>{
			this.setState({
				item:newInf
			});

		});
	}

	renderTable() {
			
		return (
			<Table items = {this.state.item}/>
		)
	}
render() {
	return (
		<div>
			<ToDoForm clickFunction={this.setItem}/>
			{this.state.item ? this.renderTable() : this.renderLoad()}
		</div>
	);
}
}

export default App;
