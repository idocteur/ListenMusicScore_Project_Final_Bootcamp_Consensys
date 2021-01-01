var MusicToken = artifacts.require("./MusicToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MusicToken);
};
