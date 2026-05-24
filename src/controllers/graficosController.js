var graficoModel = require("../models/graficoModel");

function graficoLinhas(req, res) {
    let idUsuario = req.params.idUsuario;
    if(!idUsuario) return res.status(400).send("idUsuario inválido")

    graficoModel.graficoLinhas(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

mmodule.exports = {
    graficoLinhas
}