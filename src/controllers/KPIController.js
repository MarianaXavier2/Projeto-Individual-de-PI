var KPIsModel = require("../models/KPIModel");


function cadastrarPontos(req,res){
  let fkUsuario = req.body.idUsuario;
  let idTeste = req.body.idTesteServer;
  let pontos = req.body.pontosServer;

    KPIsModel.quantTestes(fkUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os testes: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function quantTestes(req, res) {
    let fkUsuario = req.body.idUsuario;

    if(!fkUsuario) return res.status(400).send("idUsuario inválido")

    KPIsModel.quantTestes(fkUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os testes: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function top3(req, res) {
    let fkUsuario = req.body.idUsuario;

    if(!fkUsuario) return res.status(400).send("idUsuario inválido")

    KPIsModel.top3(fkUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os testes: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function media(req, res) {
    let fkUsuario = req.body.idUsuario;

    if(!fkUsuario) return res.status(400).send("idUsuario inválido")

    KPIsModel.media(fkUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os testes: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
    quantTestes,
    top3,
    media
}