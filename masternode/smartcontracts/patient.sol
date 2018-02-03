pragma solidity  ^0.4.11;
contract patient{
    mapping(string=>string)records;
    function AddRecord(string _time,string _hash) public{
        records[_time]=_hash;
    }   
    function FetchRecord(string _time) public returns(string){
        return(records[_time]);
    }
}
