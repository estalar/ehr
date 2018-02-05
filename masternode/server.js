var express=require('express')
var app=express()
var http=require('http').Server(express)
var bodyParser = require('body-parser')
app.use(bodyParser.json())

var authorizationController=require('./server/controllers/authorization')

app.post('/api/patient/register',authorizationController.register)
app.listen(3010,()=>{
    console.log('server listening at 3010')
})