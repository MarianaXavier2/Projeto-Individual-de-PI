var database = require("../database/config");


function graficoLinhas(idUsuario, idTeste) {
  var instrucao = `
select r.pontos, t.nome from resultados r 
   join testes t on r.fk_teste = t.id
   where r.fk_user = ${idUsuario} and r.fk_teste = ${idTeste}
   order by r.dataResultado desc limit 10;`;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function graficoBarras(idUsuario) {
  var instrucao = `select truncate(avg(r.pontos), 2) media, t.nome from
   resultados r
   join testes t on r.fk_teste = t.id
   where r.fk_user = ${idUsuario} 
   group by t.nome;`;
   
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


module.exports = {
  graficoLinhas,
  graficoBarras
}

