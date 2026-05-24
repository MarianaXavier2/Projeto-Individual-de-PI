var express = require("express");

var router = express.Router();

var KPIsController = require("../controllers/KPIsController");

//Recebendo os dados do html e direcionando para a função cadastrar de KPIsController.js
router.post("/cadastrarPontos", function (req, res) {
    KPIsController.cadastrarPontos(req, res);
})
        //aq é qualquer nome "/:" dizque a proxima coisa muda todo vez e ai vem o parametro 
router.get("/contar/:idUsuario", function (req, res) {
    KPIsController.quantTestes(req, res);
});//estou chamando o arquivo .função(parametros)

router.get("/top3/:idUsuario", function (req, res) {
    KPIsController.top3(req, res);
});

//nada pronto
router.get("/media/:idUsuario", function (req, res) {
    KPIsController.media(req, res);
});

module.exports = router;