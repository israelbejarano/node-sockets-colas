const { io } = require('../server');
// on es escuchar eventos
// emit es emitir informacion
io.on('connection', (client) => {
    console.log('cliente socket conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'bienvenido a la aplicación'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        /* client.broadcast.emit('enviarMensaje', {
            usuario: data.usuario,
            mensaje: data.mensaje
        }); */
        client.broadcast.emit('enviarMensaje', data); // es lo mismo que lo de arriba
        /* if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO OK'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL'
            });
        } */

    });
});