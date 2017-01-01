var accounts = [];
function createAccount(account){
	accounts.push(account);
	return account;
}
var i = 0 ;
function getAccount(username){
	var matchedAccount;
	for(i = 0; i < accounts.length; i++) {
		if(accounts[i].username === username){
			matchedAccount = accounts[i];
		}
	}
	return matchedAccount;
}

function deposit (account, amount) {
	//only accept num, use typeof
	if(typeof amount === 'number'){
		account.balance += amount;
	} else {
		console.log('Deposit failed. Amount is not a number');
	}
}

function withdraw (account, amount) {
	//only accept num,
	if(typeof amount === 'number'){
		account.balance -= amount;
	} else {
		console.log('Withdraw failed. Amount is not a number');
	}
}

function getBalance (account) {
	return account.balance;
}

function createBalanceGetter(account){
	return function (){
		return account.balance;
	}
}


var mythili = createAccount({
	username: 'Mythili' ,
	balance: 0
})

deposit(mythili, 120);
withdraw(mythili, 'my string');

var swathi = getAccount('Mythili');
var getSwathisBalance = createBalanceGetter(swathi);

console.log(getSwathisBalance());
