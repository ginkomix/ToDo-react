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
import store from './config/store'
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

			arr = arr.filter((item)=>item.title.includes(this.state.text) || item.description.includes(this.state.text));
		}

		if(this.state.dataMax) {

			arr = arr.filter((item)=>Date.parse(this.state.dataMax)>Date.parse(item.date))
		}
		if(this.state.dataMin) {
			arr = arr.filter((item)=>Date.parse(this.state.dataMin)<Date.parse(item.date))
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
		.then((item)=>{
		this.setState({
			item
		});
	});

}

setItem =(title,priorety,data,description)=> {
	api.addItem(title,priorety,data,description)
		.then((item)=>{

		this.setState({
			item
		});

	});
}

changeDone = (id)=> {
	api.changeItems(id).then((item)=>{

		this.setState({
			item
		})
	});
}

renderTable() {		
	return (
		<Table click ={this.idChangeMenu}  change={this.changeDone} items = {this.getFilterItems() }/>
	)
}

render() {
	return (
		<Provider store={store}>
			<div>
				<h2>Add task</h2>
				<ToDoForm  clickFunction={this.setItem}/>
				<h2>Filter</h2>
				<Filter change={this.changeFilter}/>
				<h2>ToDo</h2>
				{this.state.item ? this.renderTable() : this.renderLoad()}
				{this.renderChangeMenu()}

			</div>
		</Provider>
	);
}
}

export default App;
