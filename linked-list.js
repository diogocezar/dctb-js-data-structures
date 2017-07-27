function LinkedList(){
	let head   = null;
	let length = 0;

	const create_node = (value) => {
		return {
			value,
			next: null
		};
	};

	const print = () => {
		if(!head)
			console.log("Empty List.");
		else{
			let list = "";
			let aux  = head;
			do{
				list += aux.value + " - ";
				aux = aux.next;
			}while(aux.next != null)
			list += aux.value;
			console.log(list);
		}
	}

	const add = (value) => {
		console.log("Added %s at list.", value);
		if(!head){
			head = create_node(value);
			length++;
			return head;
		}
		else{
			let aux = head;
			while(aux.next){
				aux = aux.next;
			}
			aux.next = create_node(value);
			length++;
			return aux.next;
		}
	}

	const getByIndex = (index) => {
		if(length===0 || index >= length){
			return null;
		}
		else{
			let count = 0;
			let aux   = head;
			while(count < index && aux.next){
				aux = aux.next;
				count++;
			}
			return aux;
		}
	}

	const getByValue = (value) => {
		if(length===0){
			return null;
		}
		else{
			let aux = head;
			while(aux.next){
				aux = aux.next;
				if(aux.value == value)
					return aux;
			}
			return null;
		}
	}

	const remove = (node) => {
		console.log("Remove %s from the list.", node.value);
		if(length === 0)
			return;
		if(node === head){
			head = node.next;
		}
		let currentNode = head;
		while(currentNode.next && currentNode.next !== node){
			currentNode = currentNode.next;
		}
		currentNode.next = node.next;
	}

	return {
		length:     ()      => length,
		add:        (value) => add(value),
		print:      ()      => print(),
		getByIndex: (index) => getByIndex(index),
		getByValue: (value) => getByValue(value),
		remove:     (node)  => remove(node)
	}
}

const list = LinkedList();
list.print();
list.add(5);
list.add(10);
list.add(15);
list.add(20);
list.add(100);
list.print();
console.log(list.getByIndex(2));
console.log(list.getByValue(10));
console.log(list.getByIndex(2).value);

var nodeToRemove = list.getByValue(10);
list.remove(nodeToRemove);
list.print();

var nodeToRemove = list.getByValue(20);
list.remove(nodeToRemove);
list.print();