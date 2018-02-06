var path=require('path')
var express=require('express')
var app=express()
var http=require('http').Server(express)
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

var ipfscontroller=require('./server/controllers/postIpfs')

app.post('/api/ipfs/add',ipfscontroller.addData)
app.listen(3010,()=>{
    console.log('server listening at 3010')
})
