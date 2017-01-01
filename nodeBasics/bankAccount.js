//open an acount
//deposit, withdraw, money check

var account = {
	balance: 0
};

function deposit (account, amount) {
	account.balance += amount;
	return account.balance;
}

function withdraw (account, amount) {
	account.balance -= amount;
	//return account.balance;
	console.log(account.balance);
}

function getBalance (account) {
	return account.balance;
}

deposit(account, 1000);

console.log(getBalance(account));

withdraw(account, 500);
//console.log(account.withdraw(acocunt, 500));

console.log(getBalance(account));