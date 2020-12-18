function add ( a, b ){
	return ( a + b );
};

function subtract ( a, b) {
	return ( a - b );
}

function sum (array){
return array.reduce((total, item) => total + item , 0);
};

function multiply (array) {
return array.reduce((total, num) => total * num);	
}

function power(a, b) {
	return Math.pow(a,b);
	
}

function factorial(num) {
	if (num == 0) return 1;
	let product = 1; 
	
	for (let i=num ; i>0; i-- ){
		product *= i;
	};
	return product;
}
module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
