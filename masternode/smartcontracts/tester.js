const Web3=require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.personal.unlockAccount(web3.eth.accounts[0],"kattanam",100000)
var myContract = new web3.eth.Contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"patients","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_patient","type":"address"}],"name":"returnRecord","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_patient","type":"address"},{"name":"_contract","type":"address"}],"name":"addRecord","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],'0xad913df77f1af274a98b6ad2b8bc15a07677b6ce', {
    from: web3.eth.accounts[0], 
    gasPrice: '20000000000' 
});
myContract.addRecord("0x65ba248dde936fea197063654e49e3d8f1ebafb9", "0x46b7785da60d95d2dc2219eddb09656d74892838").call({from:web3.eth.accounts[0]},(err,response)=>{
    console.log(err,'+',response)
})
