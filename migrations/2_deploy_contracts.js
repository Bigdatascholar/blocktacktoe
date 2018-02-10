var contactStorage = artifacts.require("./contactStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(contactStorage);
};
