var express = require("express");

var router = express.Router();

var graficosController = require("../controllers/graficosController");

router.get("/:empresaId", function (req, res) {
  graficosController.graficoLinhas(req, res);
});
/*
router.post("/cadastrar", function (req, res) {
  graficosController.cadastrar(req, res);
})*/

module.exports = router;