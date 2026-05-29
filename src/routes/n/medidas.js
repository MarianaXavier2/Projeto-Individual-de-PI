var express = require("express");
var router = express.Router();

var medidaController = require("../../controllers/n/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});
// quando tem : é que ele ta esperando algo
router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;