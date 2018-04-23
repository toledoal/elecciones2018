pragma solidity ^0.4.4;

contract Elections {
    string public candidate = "Andres Manuel Lopez Obrador";
    // Constructor
    constructor () public {
    }

    function GetMessage() public returns (string) { 
    return candidate;
  }
}