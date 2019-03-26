const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');
const ticketControl = new TicketControl();
// on es escuchar eventos
// emit es emitir informacion
io.on('connection', (client) => {
    client.on('siguienteTicket', (data, callback) => {
        let siguiente = ticketControl.siguiente();
        console.log('siguiente ticket: ', siguiente);
        callback(siguiente);
    });
});