HOW TO GET BLOCKTACTOE WORKING ON TESTRPC
=========================================

Get local blockchain up:

	npm install

	node_modules/.bin/testrpc

Open a new terminal tab with the Truffle console to push your contract to this local blockchain:

	truffle console

	compile

	migrate	--reset

Open a new terminal tab (or close the Truffle Console with Ctrl + C) and run the React frontend:

	npm start

Check your contract state from the Truffle Console any time with:
	
	contactStorage.deployed().then(instance => instance.getContacts())
