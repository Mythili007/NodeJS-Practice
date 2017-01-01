var argv = require('yargs')
	.command('hello', 'Greets the user', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your first name goes here',
				type: 'string'
			},
			lastname: {
				demand: true,
				alias: 'l',
				description: ' Your last name goes here',
				type: 'string'
			}
		}).help('help');
	})
	.command('get', 'description', function(yargs) {

	})
	.help('help')
	.argv;
var command = argv._[0]; //the first element in array '_'

console.log(argv);


if(command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined'){
	console.log('Hello ' + argv.name +' '+ argv.lastname+ '!');
} else if(command === 'hello' && typeof argv.name !== 'undefined'){
	console.log('Hello ' + argv.name + '!');
} else if (command === 'hello'){
	console.log('Hello world!');
}













// if(command === 'hello'){
// 	// console.log(argv); // y argv variable is nt being taken and print the values entered by user?
// 	console.log('Hello world!');
// } else {
// 	// console.log(argv);
// 	console.log('The first object is not what you entered.');
// }