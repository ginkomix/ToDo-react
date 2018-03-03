import items from "./demo-data";

class Api {
	constructor() {
		this.key = 'item';
		this.inf =[];
	}

	getItems() {
		return new Promise(resolve=>{
			let item = JSON.parse(localStorage.getItem(this.key)),
				inf =[];

			if(Array.isArray(item)) {
				inf = item;
			} else {
				inf = items;
			}
			resolve(inf);
		}) ;
	}

	changeItem = (id,title,priorety,data,description) => {		
		return new Promise(resolve=>{
			let prioretys = Number(priorety);
			let itemNew = {
				id: id,
				title: title,
				description: description,
				priority: prioretys,
				date: `${data}`,
				done: false
			}
			for(let key in this.inf) {
				if(Number(this.inf[key].id) ===Number(id)) {
					this.inf[key] = itemNew;
				}
			}
			
			this.setItems().then(()=>{
				resolve(this.inf);
			})
		});
	}
	
	delItem = (id)=> {
		for(let key in this.inf) {
				if(Number(this.inf[key].id) ===Number(id)) {
					this.inf.splice(key,1);
				}
			}
		this.setItems();
	}

	addItem(store,item){
	
			let prioretys = Number(item.priorety),
			 itemNew = {
				id: Date.now(),
				title: item.title,
				description: item.description,
				priority: prioretys,
				date: `${item.data}`,
				done: false
			},
				storeOut = [...store,itemNew];
			
			this.setItems(storeOut);
	
				return itemNew;
			
		
	}

	

	setItems = (store)=> {
		return new Promise(resolve=> {
			localStorage.setItem(this.key,JSON.stringify(store));
			resolve();
		});

	}


}

export let api = new Api();

