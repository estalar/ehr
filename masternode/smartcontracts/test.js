const Web3=require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
var contract=web3.eth.contract([{"constant":true,"inputs":[{"name":"_n","type":"uint256"},{"name":"_accessCode","type":"uint256"}],"name":"FetchRecord","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"n","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_accessCode","type":"uint256"}],"name":"FetchDob","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_accessCode","type":"uint256"}],"name":"changeAccessCode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_time","type":"bytes32"},{"name":"_hash","type":"bytes32"},{"name":"_accessCode","type":"uint256"}],"name":"AddRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_dob","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);

web3.eth.defaultAccount=web3.eth.accounts[0];
//web3.personal.unlockAccount(web3.eth.accounts[0],"kattanam",100000)
var contractInstance=contract.at('0x8cdaf0cd259887258bc13a92c0a6da92698644c0');
console.log(contractInstance.hash(1));

contractInstance.FetchRecord(0,2255,function(err,result){
    if(err){
        console.log(err)
    }
    console.log('result : '+result)
})

contractInstance.FetchDob(2255,function(err,result){
    if(err){
        console.log(err)
    }
    console.log('result : '+result)
})
