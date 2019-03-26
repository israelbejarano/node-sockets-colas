// comando para establecer la conexion
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('desconectado del servidor');
});

$('button').on('click', function() {
    console.log('click!');
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});