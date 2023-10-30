// Поиск в ширину
const graph = {};
graph.a = ['b', 'c']; // Каждое поле графа - это массивы вершин, в которых есть путь
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadthSearch(graph, start, end){
	let queue = [];
	queue.push(start);
	while(queue.length > 0){
		const current = queue.shift();
		if(!graph[current]){
			graph[current] = []; // никуда пути нету
		}

		if(graph[current].includes(end)){
			return true;
		} else {
			queue = [...queue, ...graph[current]];
		}
	}

	return false;
}

// Прверяем есть ли путь от start до end в графе graph
console.log(breadthSearch(graph, 'a', 'g'));