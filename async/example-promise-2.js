// function doWork (shouldFail) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			if(typeof shouldFail === 'boolean' && shouldFail === true) {
// 				reject('Error Message');
// 			} else {
// 				resolve('Success');
// 			}
// 		}, 1000);
// 	});
// }

// doWork(true).then(function (message){
// 	console.log(message);
// 	return doWork(true);
// }).then(function (message) {
// 	console.log(message);
// 	// console.log('All done!');
// }).catch(function (error) {
// 	console.log(error);
// });

function getLocation () {
	return new Promise(function (resolve, reject) {
		// var encodedLocation = encodeURIComponent(location);
		// var url = 'http://api.apixu.com/v1/current.json?key=f6ff3f4ddc7d4c3194a112750162112&q= ' + encodedLocation + '&units=imperial';
		resolve('Hyderabad');
	});
}

function getWeather (location) {
	return new Promise (function (resolve, reject) {
		resolve('It is 31 in ' + location + '!');
	});
}

getLocation().then(function (location) {
	return getWeather(location);
}).then(function (currentWeather) {
	console.log(currentWeather);
});