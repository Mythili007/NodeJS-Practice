// function doWork (data, callback) {
// 	callback('done');
// 	callback('done second');
// }

// function doWorkPromise (data) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			reject('Everything is broken');
// 		},1000);
// 		// reject({
// 		// 	error: 'Something bad happened'
// 		// });
// 	});
// }

// doWorkPromise('Some data').then(function (data) {
// 	console.log(data);
// }, function (error) {
// 	console.log(error);
// });
var request = require('request');

function getWeather (location) {
	return new Promise (function (resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.apixu.com/v1/current.json?key=f6ff3f4ddc7d4c3194a112750162112&q= ' + encodedLocation + '&units=imperial';

		if(!location) {
			return reject('No location provided');
		}

		request({
		url:url,
		json: true
		}, function (error, response, body) {
		if(error) {
			reject('Unable to fetch the weather.');
		} else {
			resolve('It\'s ' + body.current.temp_c + ' in ' + body.location.name);
			}
			});
		});
}

getWeather('Atlanta').then(function (currentWeather) {
	console.log(currentWeather);
}, function (error) {
	console.log(error);
});



