var express=require('express')
var app=express()
var http=require('http').Server(express)
app.post('/api/patient/register')
app.listen(3000,()=>{
    console.log('server listening at 30000')
})