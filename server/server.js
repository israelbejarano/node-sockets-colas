const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
const app = express();
let server = http.createServer(app); //montar servidor http con la configuracion del express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
module.exports.io = socketIO(server); // inicializar socket io en backend
// para saber si se ha instalado bien socketIO ir a la
// url http://localhost:3000/socket.io/socket.io.js
// si se ve codigo de la libreria es que la instalacion ha sido correcta
require('./sockets/socket');

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});