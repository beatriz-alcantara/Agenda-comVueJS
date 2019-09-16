const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()

app.use(express.json())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.post('/salvarEvento', (req, res) => {
    let listaEventos = fs.readFileSync('listaEventos.json')
    let eventos = JSON.parse(listaEventos)
    res.send(eventos)
    if (eventos.length > 0) req.body.id = eventos[eventos.length-1].id + 1;
    else req.body.id = 1
    eventos.push(req.body)
    fs.writeFileSync('listaEventos.json', JSON.stringify(eventos))
})

app.get('/eventos', (req, res) => {
    let listaEventos = fs.readFileSync('listaEventos.json')
    let eventos = JSON.parse(listaEventos)
    res.send(eventos)
})

app.listen(3000, () => {
    console.log('servidor na porta 3000')
})