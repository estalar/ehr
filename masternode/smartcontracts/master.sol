pragma solidity  ^0.4.11;
contract Master{
mapping (address=>address) public patients ;

function addRecord(address _patient,address _contract) returns(address){
    patients[_patient]=_contract;
    return patients[_patient];
}
function returnRecord(address _patient) constant returns(address) {
    return patients[_patient];
}
}
