var accounts = [];
function createAccount(account){
	accounts.push(account);
	return account;
}

function getAccount(username){
	var matchedAccount;
	//var i=0;

	accounts.forEach(function (account) {
		//console.log(i + ' has account ' + account);
		if(account.username === username){
			matchedAccount = account;
		}
		//i++;
	});
	return matchedAccount;
}
function deposit (account, amount) {
	account.balance += amount;
	//return account.balance;
}

function withdraw (account, amount) {
	account.balance -= amount;
}

function getBalance (account) {
	return account.balance;
}

var mythilisAccount = createAccount({
	username: 'Mythili',
	balance: 0
});
//console.log("1st get account details: " + getAccount('Mythili'));

deposit(mythilisAccount,100);
console.log(getBalance(mythilisAccount));

withdraw(mythilisAccount, 11);
console.log(getBalance(mythilisAccount));

var existingAccount = getAccount('Mythili');
console.log(getBalance(mythilisAccount));

var swathisAccount = createAccount({
	username: 'swathikln',
	balance: 13
});
console.log(accounts);

var existingSwathiAccount = getAccount('swathikln');
console.log(existingSwathiAccount);








