const Web3=require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var contract=web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"patients","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_patient","type":"address"}],"name":"returnRecord","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_patient","type":"address"},{"name":"_contract","type":"address"}],"name":"addRecord","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);

web3.eth.defaultAccount=web3.eth.accounts[0];
web3.personal.unlockAccount(web3.eth.accounts[0],"kattanam",100000)
var contractInstance=contract.at('0x84073e111178b9b8f22005ec800c80341c102823')
console.log(contractInstance);

contractInstance.returnRecord.call(web3.eth.accounts[1],function(err,result){
    if(err){
        console.log(err)
    }
    console.log('result'+result)
})
