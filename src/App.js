import React from "react";
import Table from "./components/Table";
import ToDoForm from "./components/ToDoForm";
import Filter from "./components/Filter";
import {api} from "./utils/api";
import ContextMenu from "./components/ContextMenu";
import Blockout from "./components/Blockout";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import {Provider} from 'react-redux';
import store from './config/store';

class App extends React.Component {

	state = {
		item: null,
		completed:false,
		text: '',
		dataMax: 0,
		dataMin: 0,
		id:0

	}

	renderChangeMenu = () =>{
		if(this.state.id) {
			return(
				<div>
					<ContextMenu itemId={this.state.id} delItem={api.delItem} idChangeMenu={this.idChangeMenu} changeItem ={api.changeItem}/>
					<Blockout/>
				</div>

			)

		}

	}

	idChangeMenu = (id) => {
		this.setState({
			id
		})
	}








setItem =(title,priorety,data,description)=> {
	api.addItem(title,priorety,data,description)
		.then((item)=>{

		this.setState({
			item
		});

	});
}



renderTable() {		
	return (
		<Table click ={this.idChangeMenu}/>
	)
}

render() {
	return (
		<Provider store={store}>
			<div>
				<h2>Add task</h2>
				<ToDoForm />
				<h2>Filter</h2>
				<Filter/>
				<h2>ToDo</h2>
				{ this.renderTable()}
				{this.renderChangeMenu()}

			</div>
		</Provider>
	);
}
}

export default App;
