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
    
    bytes1[] public contacts;
    bytes32 public winner;

    /* Save function */
    function addContacts(bytes1 _one, bytes1 _two, bytes1 _three, bytes1 _four, bytes1 _five, bytes1 _six, bytes1 _seven, bytes1 _eight, bytes1 _nine) public returns (bool success) {
        contacts = [_one, _two, _three, _four, _five, _six, _seven, _eight, _nine];
        return true;
    }

    /* Save function */
    function addWinner(bytes32 _winner) public returns (bool success) {
        winner = _winner;
        return true;
    }

    /* Retrieve function */
    function getWinner() constant returns (bytes32) {
        return winner;
    }

    /* Retrieve function */
    function getContacts() constant returns (bytes1[]) {
        return contacts;
    }

}