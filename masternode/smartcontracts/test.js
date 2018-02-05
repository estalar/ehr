const Web3=require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var contract=web3.eth.contract(JSON.parse('[{"constant":false,"inputs":[{"name":"_patient","type":"string"}],"name":"returnRecord","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_patient","type":"string"},{"name":"_contract","type":"string"}],"name":"addRecord","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'))
web3.eth.defaultAccount=web3.eth.accounts[0];
web3.personal.unlockAccount(web3.eth.accounts[0],"kattanam",100000)
var contractInstance=contract.at('0x40823b134e84de80fa911f17599de27f35aacb20')
console.log(contractInstance);

contractInstance.addRecord.call("a","b",function(err,result){
    if(err){
        console.log(err)
    }
    console.log('result'+result.toString())
})
contractInstance.returnRecord.call("a",function(err,result){
    if(err){
        console.log(err)
    }
    console.log('result'+result.toString())
})