const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

const input = fs.readFileSync('patient.sol');
const output = solc.compile(input.toString(), 1);
const bytecode = output.contracts[':patient'].bytecode;
const abi = JSON.parse(output.contracts[':patient'].interface);
console.log(output.contracts[':patient'].interface)
const contract = web3.eth.contract(abi);
<<<<<<< HEAD
//web3.personal.unlockAccount(web3.eth.accounts[0],"kattanam",100000)

const contractInstance = contract.new("29/08/1995",{
=======
web3.personal.unlockAccount(web3.eth.accounts[0],"kattanam",100000)
const contractInstance = contract.new({
>>>>>>> 1433483f5dbf3fd715c98b8f551d3b601043d62c
    data: '0x' + bytecode,
    from: web3.eth.accounts[0],
    gas: 90000*5
}, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(res.transactionHash);

    var intId=setInterval(()=>{
        if(contractInstance.address!==undefined){
            console.log(contractInstance.address)
            clearInterval(intId)
            contractInstance.address=undefined
        }
    },3000)
});
