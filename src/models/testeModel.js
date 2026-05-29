var database = require("../database/config")

function cadastrarPontos(idUsuario, fkTeste, pontos){
    var instrucao = `insert into resultados (fk_user, fk_teste, pontos) 
    value (${idUsuario}, ${fkTeste}, ${pontos})`;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


module.exports = {
    
}