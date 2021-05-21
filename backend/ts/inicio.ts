const express = require('express');
const bodyParser = require('body-parser')
const cors=require('cors');
const app=express();
const hostname = '127.0.0.1';
const port = 3025;
const fs = require('fs');
const uuid = require('uuid');

app.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
app.use(cors());

app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: false })); //body formulario

const json_notas = fs.readFileSync('../notas.json', 'utf-8');
let notas = JSON.parse(json_notas);

app.post('/', (req:any,res:any)=> {
    const {titulo, estado, descripcion} = req.body;
    let nuevaNota = {
        id:uuid.v4(),
        titulo,
        estado,
        descripcion
    }
    notas.push(nuevaNota);
    const json_notas = JSON.stringify(notas);
    fs.writeFileSync('../notas.json', json_notas, 'utf-8');
    res.end();
});


app.get('/', (req:any,res:any)=>{
    let lector = fs.readFileSync('../notas.json');
    let datos = JSON.parse(lector);
    res.send(datos);
    res.end();
});

app.get('/listado', (req:any, res:any) => {
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




