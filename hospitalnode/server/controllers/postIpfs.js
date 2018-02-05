const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'localhost', port: 5001, protocol: 'http' });
module.exports.addData=function(req, res){
  ipfs.addJSON(req.body, (err, result) => {
  if(err){
    res.json({status:400,details:err})
  }
  else{
    res.json({status:200,hash:result})
  }
 });
}
