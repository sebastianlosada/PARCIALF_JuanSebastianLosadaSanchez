const {Schema, model} = require('mongoose');

const PedidosSchema = Schema({
    id: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    }
}, {
    toJSON: {
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

PedidosSchema.virtual('Coordenadas', {
    ref: 'coordenadas',
    localField:'id',
    foreignField: 'pedido_id',
    justOne: true,
})

module.exports = model('Pedidos', PedidosSchema)