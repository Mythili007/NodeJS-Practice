/*createadder function(baseNumber)
	

	return function(numberToAdd);

add up base num & num to add n return the result

 */
function createAdder(baseNumber){
	function numberToAdd(numToAdd){
		return (baseNumber+numToAdd);
	}
	return numberToAdd;
}

var addTen = createAdder(10);
console.log(addTen(2)); //op:12



// function greetMaker (name) {
// 	function greet () {
// 		console.log('Hello ' + name + '!');
// 	}
// 	return greet;
// }

// var greetMythili = greetMaker('Mythili');
// greetMythili();

// var greetWorld = greetMaker('world');
// greetWorld();

//closure is defining a function which has access 
//to the parent function