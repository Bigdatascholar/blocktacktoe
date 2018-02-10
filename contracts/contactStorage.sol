pragma solidity ^0.4.18;

contract mortal {
    /* Define variable owner of the type address */
    address owner;

    /* This function is executed at initialization and sets the owner of the contract */
    function mortal() { owner = msg.sender; }

    /* Function to recover the funds on the contract */
    function kill() { if (msg.sender == owner) selfdestruct(owner); }
}

contract contactStorage is mortal {
    
    bytes32[] public contacts = [bytes32('Your contacts:')];

    /* Save function */
    function addContacts(bytes32 _newContact) public returns (bool success) {
        contacts.push(_newContact);
        return true;
    }

    /* Retrieve function */
    function getContacts() constant returns (bytes32[]) {
        return contacts;
    }
}