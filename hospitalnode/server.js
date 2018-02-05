var express=require('express')
var app=express()
var http=require('http').Server(express)
var bodyParser = require('body-parser')
app.use(bodyParser.json())

var ipfscontroller=require('./server/controllers/postIpfs')

app.post('/api/ipfs/add',ipfscontroller.addData)
app.listen(3010,()=>{
    console.log('server listening at 3010')
})
