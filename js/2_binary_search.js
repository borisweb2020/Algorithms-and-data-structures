const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let count = 0;

// Реализация с помощью цикла:
function binarySearch(arr, item){
	let start = 0;
	let end   = arr.length;
	let middle;
	let found = false;
	let position = -1;

	while(found === false && start <= end){
		count += 1;
		middle = Math.floor((start + end) / 2);
		if(arr[middle] === item){
			found = true;
			position = middle;
			return position;
		}
		if(item < array[middle]){
			end = middle - 1;
		} else {
			start = middle + 1;
		}
	}

	return position;
}

console.log(binarySearch(array, 14));
console.log('count =', count);

// Реализация с помощью рекурсии:
function recusiveBinarySearch(arr, item, start, end){
	let middle = Math.floor((start + end) / 2);
	count += 1;

	if(item === arr[middle]){
		return middle;
	}

	if(item < arr[middle]){
		return recusiveBinarySearch(arr, item, 0, middle - 1);
	} else {
		return recusiveBinarySearch(arr, item, middle + 1, end);
	}
}

console.log(recusiveBinarySearch(array, 14, 0, array.length));
console.log('iterations:', count);