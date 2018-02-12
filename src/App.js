import React from "react";
import Table from "./components/Table";
import items from "./utils/demo-data";
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
	
	renderTable() {
		return (
		<Table items = {items}/>
		)
	}
	render() {
		return (
			<div>
				{this.state.item ? this.renderTable() : this.renderLoad()}
			</div>
		);
	}
}

export default App;
