import React from 'react';

export default class Filter extends React.Component {

	render() {
		return(
			<div>
				<input type="checkbox" checked ={false}  />
				<input id="searchText"  type="text"/>
				<input id="searchDataMin" type="datetime-local" />
				<input id="searchDataMax" type="datetime-local" />
			</div>	

		)



	}




}