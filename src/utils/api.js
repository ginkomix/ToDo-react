import items from "./demo-data";
const key = 'item';
	let inf ;
export const getItems = ()=> {
	
	return new Promise(resolve=>{
		let item = JSON.parse(localStorage.getItem(key));
		
		if(Array.isArray(item)) {
			inf = item;
		} else {
			inf = items;
		}
	
		resolve(inf);
	}) ;




}

export const addItem = (title) =>{
	return new Promise(resolve=>{
		let itemNew = {
			id: Date.now(),
			title: title,
			description: "Some text",
			priority: 0,
			date: Date.now(),
			done: false
		}
		inf.push(itemNew);
		setItems().then(()=>{
			resolve(inf);
		})
	});
}

const setItems = ()=> {
	return new Promise(resolve=> {
		localStorage.setItem(key,JSON.stringify(inf));
		resolve();
	});

}