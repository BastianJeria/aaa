/*


"use strict";
var express = require('express');
var cors = require('cors');
var app = express();
var hostname = '127.0.0.1';
var port = 3011;
var fs = require('fs');
var notas = [];
app.use(cors());
app.get('/datos', function (req, res) {
    var datos = [{
            titulo: "entregar tarea de web",
            estado: "abierto",
            descripcion: "hacer la tarea y entregarla"
        }, {
            titulo: "ir a votar",
            estado: "proceso",
            descripcion: "ir al local de votacion"
        }, {
            titulo: "certamen de fisica",
            estado: "cerrado",
            descripcion: "estudiar para fisica"
        }, {
            titulo: "certamen de ingles",
            estado: "proceso",
            descripcion: "estudiar para peru"
        }];
    res.send(datos);
});
app.post("/", function (req, res) {
    var notas = req.body;
    console.log(notas);
    res.send('received');
});
app.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});




*/
/*
app.get('/datos', (req:any,res:any)=>{
    let datos=[{
        titulo:"entregar tarea de web",
        estado:"abierto",
        descripcion:"hacer la tarea y entregarla"
    },{
        titulo:"ir a votar",
        estado:"proceso",
        descripcion:"ir al local de votacion"
    
    },{
        titulo:"certamen de fisica",
        estado:"cerrado",
        descripcion:"estudiar para fisica"
    },{
        titulo:"certamen de ingles",
        estado:"proceso",
        descripcion:"estudiar para peru"
    }];
    res.send(datos);
});
*/
/*
app.get('/', (req:any,res:any)=>{
    res.render('formulario.component.html', {
        notas
    })
});

app.get('/nuevo', (req:any,res:any)=>{
    res.render('nuevo');
})

app.post('/nuevo', (req:any,res:any)=> {
    const {titulo, estado, descripcion} = req.body;
    if(!titulo || !estado || !descripcion){
        res.status(400).send('pone algo saco wea');
        return;
    }

    let nuevaNota = {
        titulo,
        estado,
        descripcion
    }

    notas.push(nuevaNota);

    const json_notas = JSON.stringify(notas);
    fs.writeFileSync('backend/notas.json', json_notas, 'utf-8');
});
*/ 
