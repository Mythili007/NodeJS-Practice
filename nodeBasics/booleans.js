var ab = true;


function tooggleBoolean (booleanVar){
	// if(booleanvar === true) {
	// 	return true;
	// } else if (booleanvar === false) {
	// 	return false;
	// }

	if(typeof booleanVar === 'boolean'){
		return !booleanVar;
	} else {
		console.log('Warning! Not a boolean');
	}

}
var newBoolean = tooggleBoolean(tooggleBoolean(true));
console.log(newBoolean);