var express = require("express");

var router = express.Router();

var graficosController = require("../controllers/graficosController");

router.get("/graficoLinhas/:idUsuario/:idTeste", function (req, res) {
  console.log("rota")
  graficosController.graficoLinhas(req, res);
});

router.get("/graficoBarras/:idUsuario", function (req, res) {
  console.log("rota")
  graficosController.graficoBarras(req, res);
});

/*
router.post("/cadastrar", function (req, res) {
  graficosController.cadastrar(req, res);
})*/

module.exports = router;