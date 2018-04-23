var Elections = artifacts.require("./Electionsa");

module.exports = function(deployer) {
  deployer.deploy(Elections);
};