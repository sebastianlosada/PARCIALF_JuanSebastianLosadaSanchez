const {Schema, model} = require('mongoose')

const CoordenadasSchema = Schema({
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    },
    pedido_id: {
        type:Schema.Types.ObjectId,
        ref: 'Pedidos'
    }
})

module.exports = model('Coordenadas', CoordenadasSchema);
