const express = require('express')
const router = express.Router()

const { calcularPrecoPrazo } = require('correios-brasil');

router.post('/', (request, response) => {
    const {
        nCdServico,
        sCepOrigem,
        sCepDestino,
        nVlPeso,
        nCdFormato,
        nVlComprimento,
        nVlAltura,
        nVlLargura,
        nVlDiametro, 
    } = request.body;

    calcularPrecoPrazo({
        nCdServico,
        sCepOrigem,
        sCepDestino,
        nVlPeso,
        nCdFormato,
        nVlComprimento,
        nVlAltura,
        nVlLargura,
        nVlDiametro, 
    }).then(result => {

        return response.json(result)

    }).catch(error => {

        return response.json(error)

    });
})

module.exports = router
