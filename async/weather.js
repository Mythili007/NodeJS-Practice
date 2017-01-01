var request = require('request');

module.exports = function (location) {
	return new Promise (function (resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.apixu.com/v1/current.json?key=f6ff3f4ddc7d4c3194a112750162112&q= ' + encodedLocation + '&units=imperial';
		encodeURIComponent(location);

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