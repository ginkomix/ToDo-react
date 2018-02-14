import items from "./demo-data";

class Api {
	constructor() {
		this.key = 'item';
		this.inf =[];
	}

	getItems() {
		return new Promise(resolve=>{
			let item = JSON.parse(localStorage.getItem(this.key));

			if(Array.isArray(item)) {
				this.inf = item;
			} else {
				this.inf = items;
			}

			resolve(this.inf);
		}) ;
	}

	addItem(title,priorety,data,description){
		return new Promise(resolve=>{
			let itemNew = {
				id: Date.now(),
				title: title,
				description: description,
				priority: parseInt(priorety),
				date: `${data}`,
				done: false
			}
			this.inf.push(itemNew);
			this.setItems().then(()=>{
				resolve(this.inf);
			})
		});
	}

	changeItems(id) {
		
		return new Promise(resolve=>{
			this.inf.map((item)=>{
				if( item.id==id) {
					
					item.done = !item.done;
					return
				}

			});	
			this.setItems().then(()=>{
				resolve(this.inf);
			})
			
		});
	}

	setItems = ()=> {
		return new Promise(resolve=> {
			localStorage.setItem(this.key,JSON.stringify(this.inf));
			resolve();
		});

	}
}

export let api = new Api();

