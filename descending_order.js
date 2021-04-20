//https://www.codewars.com/kata/5467e4d82edf8bbf40000155
function descendingOrder(n){
	//...
	let str = n.toString();
	let array = str.split('');
	
	array = array.sort().reverse();
	array = array.join('');


	return Number(array);
	
}

//output expected: 54421
console.log(descendingOrder(42145))

//output expected: 654321
console.log(descendingOrder(145263))


//output expected: 987654321
console.log(descendingOrder(123456789))


//best practices
function descendingOrder(n){
	return parseInt(String(n).split('').sort().reverse().join(''))
}
//output expected: 54421
console.log(descendingOrder(42145))

//output expected: 654321
console.log(descendingOrder(145263))


//output expected: 987654321
console.log(descendingOrder(123456789))