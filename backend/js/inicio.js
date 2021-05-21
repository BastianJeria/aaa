"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var hostname = '127.0.0.1';
var port = 3025;
var fs = require('fs');
var uuid = require('uuid');
app.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
app.use(cors());
app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: false })); //body formulario
var json_notas = fs.readFileSync('../notas.json', 'utf-8');
var notas = JSON.parse(json_notas);
app.post('/', function (req, res) {
    var _a = req.body, titulo = _a.titulo, estado = _a.estado, descripcion = _a.descripcion;
    var nuevaNota = {
        id: uuid.v4(),
        titulo: titulo,
        estado: estado,
        descripcion: descripcion
    };
    notas.push(nuevaNota);
    var json_notas = JSON.stringify(notas);
    fs.writeFileSync('../notas.json', json_notas, 'utf-8');
    res.end();
});
app.get('/', function (req, res) {
    var lector = fs.readFileSync('../notas.json');
    var datos = JSON.parse(lector);
    res.send(datos);
    res.end();
});
app.get('/listado', function (req, res) {
    console.log(req.body);
    res.end();
    /*
    notas = notas.filter(() => notas.id != req.params.id);
  
    // saving data
    const json_books = JSON.stringify(notas);
    fs.writeFileSync('src/books.json', json_books, 'utf-8');
  
    res.redirect('/')
    */
});
