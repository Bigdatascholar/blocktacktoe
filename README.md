---------------------------------------------
 L  O  C  A  L

Get local blockchain up:

	ganache-cli

New tab, then open the Truffle console into this test blockchain:

	truffle console

Delete the 'build' folder, then compile in the Truffle Console with (skip if contract is already deployed):

	compile
	
Migrate in the Truffle Console with (skip if contract is already deployed):

	migrate	--reset


Test the contract from the Truffle Console by ADDING A CONTACT:
	
	contactStorage.deployed().then(instance => instance.addContacts('George Jetson'))


Test the contract from the Truffle Console by GETTING YOUR CONTACTS:
	
	contactStorage.deployed().then(instance => instance.getContacts())


Or, open a new terminal tab (or close the Truffle Console with Ctrl + C) and run the React frontend:

	npm start


---------------------------------------------
R I N K E B Y

To deploy contract:

blockchain sync 

	geth --rinkeby --rpc --rpcapi db,eth,net,web3,personal

in new tab, compile and deploy contract
	
	truffle console --network rinkeby

if you don't have an account:

	x = web3.personal.newAccount('pw')
	web3.eth.getBalance("yourAcctNumber")
	web3.eth.accounts

Otherwise, unlock your account:

	web3.personal.unlockAccount("0x2df219a1ae3845ab32a041499db27d4bfdb43876", 'password', 15000)

	web3.personal.unlockAccount("0x43928ec2bb4ea1eb6a77a5fd9caf36ca7b15600f", 'pw', 15000)

Compile and migrate as described in the local version:

	compile

	migrate --reset --network rinkeby


Test the contract from the Truffle Console by ADDING A CONTACT:
	
	contactStorage.deployed().then(instance => instance.addContacts('George Jetson'))


Test the contract from the Truffle Console by GETTING YOUR CONTACTS:
	
	contactStorage.deployed().then(instance => instance.getContacts())

Close Ganache, Truffle Console as the contract's now live in Rinkeby!

new tab frontend serve:
	
	npm start

to deploy to github pages:

change homepage to reflect your github page:

	"homepage": "http://nikodunk.github.io/contactStorage",	

Then run

	npm run build

And copy files to root directory











https://codepen.io/gaearon/pen/LyyXgK?editors=0010