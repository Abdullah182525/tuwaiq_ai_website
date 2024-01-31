const express = require('express')
const server = express()
server.use(express.json())
server.listen(80)


server.get('',function(req,res){
    res.sendFile(__dirname + '/form.html')
})

server.post('/check',function(req,res){
    console.log(req.body)
    console.log(Number(req.body['Gender']))
})

