const Web3=require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var contract=web3.eth.contract(JSON.parse('[{"constant":false,"inputs":[{"name":"_time","type":"string"},{"name":"_hash","type":"string"}],"name":"AddRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"hello","type":"string"}],"name":"GetOwner","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_time","type":"string"}],"name":"FetchRecord","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'))
web3.eth.defaultAccount='0x8f01bfd177e0cd4e40d79747560fb21fcd0889bd';
console.log(web3.personal.unlockAccount('0x8f01bfd177e0cd4e40d79747560fb21fcd0889bd',"hello",10000))
var patient=contract.at('0x5bd06339892240bd8a040125437c8d606d6516d2')
console.log(patient)
patient.GetOwner.call('hello',(err,result)=>{
    console.log(err+'\n\n'+result.toString())
})
