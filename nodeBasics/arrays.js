var ar = [100, 50, 75, 97];
var totalEl = 0;
ar.push(89);
ar.forEach(function (ar){
	totalEl = totalEl + ar;
	console.log('Current total is : ' + totalEl);
});
var total = totalEl / ar.length;
console.log('Average: ' + total);
