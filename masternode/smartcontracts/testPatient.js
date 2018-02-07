const Web3=require('web3')
const bs58 = require('bs58')

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
var contract=web3.eth.contract([{"constant":true,"inputs":[{"name":"_n","type":"uint256"},{"name":"_accessCode","type":"uint256"}],"name":"FetchRecord","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"n","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_accessCode","type":"uint256"}],"name":"FetchDob","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_accessCode","type":"uint256"}],"name":"changeAccessCode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_time","type":"bytes32"},{"name":"_hash","type":"bytes32"},{"name":"_accessCode","type":"uint256"}],"name":"AddRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);

web3.eth.defaultAccount=web3.eth.accounts[0];
//web3.personal.unlockAccount(web3.eth.accounts[0],"kattanam",100000)
var contractInstance=contract.at('0xaa588d3737b611bafd7bd713445b314bd453a5c8');
console.log(contractInstance.n());
//console.log(contractInstance.hash(1));


/*
var hash = "QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG"
const fromIPFSHash = hash => {
    const bytes = bs58.decode(hash);
     console.log(bytes);
    const multiHashId = 2;
    // remove the multihash hash id
    return bytes.slice(multiHashId, bytes.length);
};

var passHash = fromIPFSHash(hash).toString("hex");
passHash="0x"+passHash;




contractInstance.AddRecord("7/2/18",passHash,2255,function(err,result){
    if(err){
        console.log(err)
    }
    console.log('result : '+result)
})
*/

contractInstance.FetchRecord(1,2255,function(err,result){
    if(err){
        console.log(err)
    }
    function hextoString(hexx){
      var hex = hexx.toString();//force conversion
      var str = '';
      for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
      return str;
    }

    const toIPFSHash = str => {
    // remove leading 0x
    const remove0x = str.slice(2, str.length);
    // add back the multihash id
    const bytes = Buffer.from(`1220${remove0x}`, "hex");
    console.log(bytes);
    const hash = bs58.encode(bytes);
    return hash;
};
  // console.log(result[0]);

    console.log('result : '+ hextoString(result[0]) + "  " +toIPFSHash(result[1]) );
})

contractInstance.FetchDob(2255,function(err,result){
    if(err){
        console.log(err)
    }
    console.log('result : '+result)
})
