console.log('starting password manager');
var crypto = require('crypto-js');
var storage = require('node-persist'); //including third party modules in our app using requuire keyword
storage.initSync(); //to get our pc ready to write and save variables

var argv = require('yargs')
	.command('create', 'create a new account', function(yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Account name(Eg: Twitter, Facebook)',
				type: 'string'
			},
			username: {
				demand: true,
				alias: 'u',
				description: 'Account username or email',
				type: 'string'
			},
			password: {
				demand: true,
				alias: 'p',
				description: 'Please provide your account password',
				type: 'string'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'Master password',
				type: 'string'
			}
		}).help('help');
	})
	.command('get', 'get an existing account', function(yargs){
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Account name(Eg: Twitter, Facebook)',
				type: 'string'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'Master password',
				type: 'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;

var command = argv._[0];

function getAccounts(masterPassword){
	//use getitemsync to fetch accounts
	var encryptedAccount = storage.getItemSync('accounts');
	var accounts = [];
	//console.log('Encrypted account value: ' + JSON.stringify(encryptedAccount));	var accounts = [];
	if(typeof encryptedAccount !== 'undefined'){
		//decrypt
		var bytes = crypto.AES.decrypt(encryptedAccount, masterPassword);
		console.log("jsndjn" + bytes);
		accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
		console.log("abccjdnc: ", accounts);

	}
		//return acocunts array
	return accounts;
}
function saveAccounts(accounts, masterPassword){
	//encrypt acocunts
	var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
	//setitemsync to save encrypted accounts
	storage.setItemSync('accounts', encryptedAccounts.toString());
	//return the accounts array
	return accounts;
}


function createAccount (account, masterPassword) {
	var accounts = getAccounts(masterPassword);
	accounts.push(account);
	saveAccounts(accounts, masterPassword);
	return account;
}

function getAccount (accountName, masterPassword) {
	// var accounts = storage.getItemSync('accounts');
	var accounts = getAccounts(masterPassword);
	var matchedAccount;
	for(var i=0;i<accounts.length;i++){
		if(accounts[i].name === accountName){
			matchedAccount = accounts[i];
		}
	}
	return matchedAccount;
}

if (command === 'create') {
	var createdAccount = createAccount({
		name: argv.name,
		username: argv.username,
		password: argv.password
	}, argv.masterPassword);
	console.log('Account created!');
	console.log(createdAccount);
} else if (command === 'get') {
	var fetchedAccount = getAccount(argv.name, argv.masterPassword);

	if(typeof fetchedAccount === 'undefined'){
		console.log('Account Not Found');
	} else {
		console.log('Account Found');
		console.log(fetchedAccount);
	}
}















