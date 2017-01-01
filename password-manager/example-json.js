var person = {
	name: 'Mythili',
	age: 24
};
var personJSON = JSON.stringify(person);

// console.log(personJSON);
// console.log(typeof personJSON);

// var personObject = JSON.parse(personJSON);
// console.log(personObject.name);
// console.log(personObject.age);
// console.log(typeof personObject);

console.log('-----Challenge Area-----');

var animal = '{"name": "choco", "age": 3}';

var animalObject = JSON.parse(animal);
animalObject.age = 2;

animal = JSON.stringify(animalObject);
console.log(animal);
// console.log(animalObject.name);
// console.log(animalObject.age);

