const express = require('express');

const app = express();

//Crando el servidor
app.listen(3000, () => {

    console.log("Servidor escuchando en el puerto " + 3000);

});


//Creando ruta inicial
app.get('/', (req, res) => {

    res.json({"nombre": "Elian", "Edad": 21});

});

app.get('/hola', (req, res) => {

    res.json({"msg": "hola mundo"});

});