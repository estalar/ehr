pragma solidity  ^0.4.11;
contract patient{
    address owner;
    uint accessCode;
    mapping(string=>string)records;

    function patient(){
     owner = msg.sender;
    }

    modifier isOwner{
    require (msg.sender==owner);
    _;
    }

    function changeAccessCode(uint _accessCode) isOwner{
      accessCode = _accessCode;
    }

    function AddRecord(string _time,string _hash,uint _accessCode) public {
       require(accessCode==accessCode);
       records[_time]=_hash;
    }

    function FetchRecord(string _time,uint _accessCode) public constant returns(string){
        require(accessCode==accessCode);
        return(records[_time]);
    }
}
