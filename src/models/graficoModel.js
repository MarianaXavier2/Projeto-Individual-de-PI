var database = require("../database/config");


function graficoLinha(idUsuario, teste){
    var instrucao = `select r.pontos from usuarios u 
   join resultados r on u.id = r.fk_user
   join testes t on r.fk_teste = t.id
   where u.id = ${idUsuario} and t.nome = ${teste};`;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


module.exports = {
    graficoLinha
}