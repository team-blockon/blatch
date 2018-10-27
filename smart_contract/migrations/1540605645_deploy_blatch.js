const Blatch = artifacts.require("./Blatch.sol");

module.exports = function(deployer) {
    deployer.deploy(Blatch);
};
