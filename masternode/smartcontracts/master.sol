pragma solidity  ^0.4.11;
contract Master{
   string hello;
   function addRecord(string _hello) public  returns(string){
        hello =_hello;
        return hello;
        }
    function returnRecord() public returns(string) {
        return hello;
    } 
}