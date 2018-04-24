var Elections = artifacts.require("./Elections");

contract("Elections", function(accounts){
    it("initialize with Andres Manuel as Candidate", function(){
        return Elections.deployed().then(function(instance){
            return instance.candidate();
        }).then(function(candidate){
            assert.equal(candidate, "Andres Manuel Lopez Obrador");
        });
    });
});