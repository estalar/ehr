
var solc=require('solc')
var fs=require('fs')
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
module.exports.register=(req,res)=>{
    var owner='hello'
    const input = 'pragma solidity  ^0.4.11;contract patient{string owner="'+owner+'";mapping(string=>string)records;function AddRecord(string _time,string _hash) public{records[_time]=_hash; } function FetchRecord(string _time) public returns(string){return(records[_time]); }function GetOwner() returns(string){return owner;}}'
    var output = solc.compile(input, 1)
    var data=output.contracts[':patient'].bytecode
    var abi=output.contracts[':patient'].interface
    var patientContract=web3.eth.contract(JSON.parse(abi))
    web3.personal.unlockAccount(web3.eth.accounts[0], "kattanam", 10000);
    var patientInstance=patientContract.new({
        data:'0x'+data,
        from:web3.eth.accounts[0],
        gas: 1000000
    },function(err, myContract){
        var result=JSON.stringify(myContract)
        console.log(err+"\n\n"+myContract.transactionHash)
        var intId=setInterval(()=>{
            if(patientInstance.address!==undefined){
                console.log(patientInstance.address)
                clearInterval(intId)
                res.json({status:400,address:patientInstance.address}).end()   
                patientInstance.address=undefined         
            }
        },3000)
    })
}
    