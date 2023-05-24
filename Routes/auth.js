const express = require('express')
const router = express.Router();
const { check } = require('express-validator');
const { registrarPedido} = require('../Controllers/auth');
const { registrarCoordenada, listarCoordenada} = require('../Controllers/coordenada');
//const { validarCampos } = require('../MiddleWares/validar-campos');
//const { validarJWT } = require('../MiddleWares/validar-token')


router.get('/registrar/pedido', registrarPedido)
router.post('/listar/coordenada', listarCoordenada)
router.get('/registrar/coordenada', registrarCoordenada)


module.exports = router;