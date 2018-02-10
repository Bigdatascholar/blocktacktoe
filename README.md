---------------------------------------------
 L  O  C  A  L

Get local blockchain up:

	node_modules/.bin/testrpc

New tab, then open the Truffle console into this test blockchain:

	truffle console

Delete the 'build' folder, then compile in the Truffle Console with (skip if contract is already deployed):

	compile
	
Migrate in the Truffle Console with (skip if contract is already deployed):

	migrate	--reset


Check your contract state from the Truffle Console any time with:
	
	contactStorage.deployed().then(instance => instance.getContacts())


Or, open a new terminal tab (or close the Truffle Console with Ctrl + C) and run the React frontend:

	npm start

