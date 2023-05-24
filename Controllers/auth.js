const express = require('express');
const Pedidos = require("../Models/pedidos")

const registrarPedido = async(req, res = express.request) => {
    const pedido = new Pedidos(req.body);

    try{
        pedido.id = req.pedido_id;
        pedido.fecha = req.fecha;
        const saved = await pedido.save();
        res.json({
            ok: true,
            pedido: saved
        })
    }catch(error){
        console.log( error );
        res.status(500).json({
            ok: false,
            pedido: 'Internal Error'
        })
    }
}

module.exports = {
    registrarPedido
}
