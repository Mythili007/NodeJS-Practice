
var i = 0;
function countDownFor (startPoint, endPoint) {
	// for(i = startPoint; i>endPoint;i--){
	// 	console.log('for: '+i);
	// }
	for(;startPoint>=endPoint; startPoint--){
		console.log('for: ' + startPoint);
	}
}

function countDownWhile (startPoint, endPoint) {
	while (startPoint >= endPoint){
		console.log('while: '+startPoint);
		startPoint--;
	}
}
countDownFor(10, 0);
countDownWhile(20, 0);
// var countLimit = 8;

// while (i < countLimit) {
// 	console.log('while: ' + i);
// 	i++;
// }

// for (i = 0; i < countLimit; i++) {
// 	console.log('for: ' + i);
// }