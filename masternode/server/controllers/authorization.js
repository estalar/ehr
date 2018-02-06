
var solc=require('solc')
var fs=require('fs')
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
module.exports.register=(req,res)=>{
    var owner='hello'
    console.log(req.body.password+'\n\n');
    var userAddress=web3.personal.newAccount(req.body.password)
    console.log("new user address",userAddress)
    const input = fs.readFileSync(__dirname+'/smartcontracts/patient.sol');
    var output = solc.compile(input, 1)
    console.log(output)
    var data=output.contracts[':patient'].bytecode
    var abi=output.contracts[':patient'].interface
    var patientContract=web3.eth.contract(JSON.parse(abi))
    console.log(abi)
    web3.personal.unlockAccount(web3.eth.accounts[0],"kattanam",10000);
    web3.eth.sendTransaction({
        from:web3.eth.accounts[0],
        to:userAddress,
        value:100000000000000000000
    },(err,success)=>{
        console.log('error:'+err)
        console.log('success:'+success)

    })
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
                res.json({status:400,address:userAddress,contract:patientInstance.address}).end()
                patientInstance.address=undefined
            }
        },3000)
    })
}
