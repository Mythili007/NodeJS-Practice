// setTimeout(function () {
// 	console.log('1');
// }, 2000);


// setTimeout(function () {
// 	console.log('3');
// }, 1000);

// console.log('2');

console.log('---Challenge---');

function printInTwoSeconds (message) {
	// var msg = message;
	setTimeout(function () {
		// body...
		console.log('My message: ' + message);
	}, 2000);
}

printInTwoSeconds('Hello async!');