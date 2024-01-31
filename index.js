
const express = require('express')
const server = express()
server.use(express.json())
server.listen(80)


server.get('',function(req,res){
    res.sendFile(__dirname + '/form.html')
})

server.post('/check',function(req,res){
    console.log(req.body)
    let gender = Number(req.body['Gender'])
    let age = Number(req.body['Age'])
    let em = Number(req.body['Married'])
    let agl = Number(req.body['AGL'])
    let bmi = Number(req.body['BMI'])
    let spawn_ai_app = require('child_process').spawn('python',['ai.py',gender,age,em,agl,bmi])
    spawn_ai_app.stdout.on('data',function(data){
        res.send({message:data.toString()})
    })
})

