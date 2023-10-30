class LinkedList {
	constructor(){
		this.size = 0; // размер списка
		this.root = null; // элемент списка
	}

	add(value){ // функция, с помощью которой добавляются элементы списка
		if(this.size === 0){
			this.root = new Node(value);
			this.size += 1;
			return true;
		}

		let node = this.root;
		while(node.next){
			node = node.next;
		}
		let newNode = new Node(value);
		node.next = newNode; // ссылка на следуюющий элемент
		this.size += 1;
	}

	getSize(){ // функция, с помощью которой вычисляется размер списка
		return this.size;
	}

	print(){ // функция, которая выводит список
		let result = []; // значения из узлов
		let node = this.root; // текущий узел
		while(node){
			result.push(node.value);
			node = node.next;
		}
		console.log(result);
	}
}

class Node {
	constructor(value){
		this.value = value;
		this.next = null; // ссылка на следующий элемент
	}
}

// ** Сздадим объет (Список) и добавим значения:
const list = new LinkedList();

list.add(5);
list.add(3);
list.add(2);
list.add(5);
list.add(7);

list.print();