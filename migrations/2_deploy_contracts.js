var SimpleBank = artifacts.require("./SimpleBank.sol");
//var Amazon = artifacts.require("./Amazon.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleBank, web3.eth.accounts[0]);
  //deployer.deploy(Amazon);
};
