// ЦИКЛ для вычисления факториала:
const factorialLoop = function(n){
	let f = 1;
	for(let i = 1; i <= n; i++){
		f *= i;
	}
	return f;
}

// РЕКУРСИВНАЯ функция для вычисления факториала:
const factorial = n => {
	if(n === 1){
		return 1; // ДОЛЖНА содердать условие, при котором рекурсия заканчивается
	}
	return n * factorial(n - 1);
}

console.log('Loop:', factorialLoop(10), 'Recursion:', factorial(10));

// ЦИКЛ для вычисления числа Фибоначчи:
function fibonachiLoop(n){
	let f1 = 1;
	let f2 = 0;
	let x;
	if(n <= 2){
		return f1 + f2;
	}
	for(let i = 2; i <= n; i++ ){
		x = f1 + f2;
		f2 = f1;
		f1 = x;
	}

	return x;
}

// РЕКУРСИВНАЯ функция для вычисления числа Фибоначчи:
function fibonachi(n){
	let x;
	if(n === 1 || n === 2){
		return 1;
	}

	x = fibonachi(n - 1) + fibonachi(n - 2);

	return x;
}

console.log('fibonachi loop:', fibonachiLoop(10), 'fibonachi recursion:', fibonachi(10));

