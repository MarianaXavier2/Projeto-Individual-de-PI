var KPIsModel = require("../models/KPIsModel");


function cadastrarPontos(req,res){
  console.log("Requisição: " + req)
  let fkUsuario = req.body.idUsuarioServer;
  let fkTeste = req.body.idTesteServer;
  let pontos = req.body.pontosServer;

  console.log("Controller", !fkUsuario);
  console.log("Controller", !fkTeste);
  console.log("Controller", !pontos);

  if (fkUsuario == undefined || fkTeste == undefined || pontos == undefined) {
    console.log("Resposta: " + res.json)
    return res.status(400).send("idUsuario, idTeste e pontos são obrigatórios");
  }

    KPIsModel.cadastrarPontos(fkUsuario, fkTeste, pontos).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      console.log(res)
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os testes: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function quantTestes(req, res) {
    let fkUsuario = req.params.idUsuario || req.body.idUsuario;

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
    let fkUsuario = req.params.idUsuario || req.body.idUsuario;

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
    let fkUsuario = req.params.idUsuario || req.body.idUsuario;

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
    cadastrarPontos,
    quantTestes,
    top3,
    media
}