How to get BlockTacToe working on TestRPC
=========================================
(requires metamask)

Get local blockchain up:

	npm install

	node_modules/.bin/testrpc

Open a new terminal tab with the to deploy your contract to local blockchain:

	truffle console

	compile

	migrate	--reset

Open a new terminal tab (or close the Truffle Console with Ctrl + C) and run the React frontend:
	
	npm start

 => Import one of the dummy TestRPC accounts to MetaMask to save and load your game to TestRPC


Check your contract state from the Truffle Console any time with:
	
	contactStorage.deployed().then(instance => instance.getContacts())
