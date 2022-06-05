const express = require('express');

const app = express();

app.listen(3000, () => {

    console.log("Servidor escuchando en el puerto " + 3000);

});

app.get('/', (req, res) => {

    res.json({"nombre": "Elian", "Edad": 21});

});