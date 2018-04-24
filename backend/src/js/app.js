App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {

    if (typeof web3 !== undefined){
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }


    return App.initContract();
  },

  initContract: function() {
    $.getJSON("/Elections.json", function(elections){
      
      App.contracts.Elections = TruffleContract(elections);
      App.contracts.Elections.setProvider(App.web3Provider);
      return App.render();
    });
    
  },

  render: function(){
    web3.eth.getCoinbase(function(err, account){
      if (err === null){
        App.acccount = account;
        $("#accountAddress").html("Your account: " + account );
      }
    });
    console.log(App.contracts.Elections);
    App.contracts.Elections.deployed().then(function(instance){
      return instance.candidate();
    }).then(candidate => {
      $("#candidate").html(`<p>${candidate}</p>`);
    });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
