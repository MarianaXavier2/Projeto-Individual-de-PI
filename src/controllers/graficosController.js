var graficoModel = require("../models/graficoModel");

function graficoLinhas(req, res) {
  let idUsuario = req.params.idUsuario;
  let idTeste = req.params.idTeste;
  console.log("Entrou")
  if (!idUsuario) return res.status(400).send("idUsuario inválido")
  if (!idTeste) return res.status(400).send("idTeste inválido")

  graficoModel.graficoLinhas(idUsuario, idTeste).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar dados grafico linha: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function graficoBarras(req, res) {
  let idUsuario = req.params.idUsuario;

  console.log("Entrou")
  if (!idUsuario) return res.status(400).send("idUsuario inválido")

  graficoModel.graficoBarras(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar dados grafico barras: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


module.exports = {
  graficoLinhas,
  graficoBarras
}