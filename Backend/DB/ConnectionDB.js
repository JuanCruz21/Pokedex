const moongose = require('mongoose');

let conexion = "mongodb+srv://Admin:Admin321@cluster0.bqcmafq.mongodb.net/?retryWrites=true&w=majority";

moongose.connect(conexion)
    .then(event=> console.log("Conectado a mongo"))
    .catch(error => console.log({mensaje: error}));

module.exports = moongose;