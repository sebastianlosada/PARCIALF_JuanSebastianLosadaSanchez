const express = require('express');
const Coordenadas = require("../Models/coordenadas")


const registrarCoordenada = async(req, res = express.request) => {
    const coordenada = new Coordenadas(req.body);

    try{
        coordenada.pedido_id = req.id;
        const saved = await coordenada.save();
        res.json({
            ok: true,
            coordenada: saved
        })
    }catch(error){
        console.log( error );
        res.status(500).json({
            ok: false,
            coordenada: 'Internal Error'
        })
    }
}

const listarCoordenada = async(req, res = express.request) => {
    const coordenada = await Coordenadas.find().populate('pedido_id','id');
    try{
        res.status(200).json({
            ok: true,
            coordenada,
        })
    }catch(error){
        console.log( error )
        res.status(500).json({
            ok: false,
            msg: 'Internal Error',
        })
    }
}

module.exports = {
    registrarCoordenada,
    listarCoordenada
}
