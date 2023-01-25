const Fund = artifacts.require("Funder");

module.exports = function (deployer){
    deployer.deploy(Fund);
};