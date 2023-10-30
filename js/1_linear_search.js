const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

// The Function that searches the index of an element in the array
function linearSearch(arr, item){
	for(let i = 0; i < array.length; i++){
		count += 1;
		if(arr[i] === item){
			return i;
		}
	}
	return null; // If there's not a searched item
}

console.log(linearSearch(array, 8)); // 3
console.log('count =', count); // 4 iterations

console.log(linearSearch(array, 15)); // null