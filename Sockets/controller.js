const pedido = [];

const socketController = (socket, io) => {

    pedido.push( socket.id )

    io.emit('Pedidos-activos', pedido)

    console.log('Cliente Conectado', socket.id);

    socket.on('disconnect', () => {
        pedido.splice( pedido.indexOf(socket.id), 1)

        console.log('Cliente Desconectado', socket.id);
    })

    socket.on('mensaje-de-cliente', ( payload, callback ) => {
        callback('Tu mensaje fue recibido');

        payload.from = 'desde el server'
        socket.broadcast.emit('mensaje-de-server', payload);
    })

    socket.on('enviar-mensaje', ({to, from, mensaje}) => {
        if (to)
            socket.to(to).emit('recibir-mensaje', {to, from, mensaje});
        else
            io.emit('recibir-mensaje', {from, mensaje});
    })
}

module.exports = { socketController }