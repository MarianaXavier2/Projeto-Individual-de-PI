var database = require("../database/config")


function cadastrarPontos(idUsuario, fkTeste, pontos){
    var instrucao = `insert into resultados (fk_user, fk_teste, pontos) 
    value (${idUsuario}, ${fkTeste}, ${pontos});`;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


function quantTestes(idUsuario){
    // var instrucao = `select count(id) total from resultados
    // where fk_user = 1;`;
    
    var instrucao = `select count(id) total from resultados
     where fk_user = ${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function top3(idUsuario){
  //   var instrucao = `select r.pontos, t.nome from resultados r
  //  join testes t on r.fk_teste = t.id
  //  where fk_user = 1 order by pontos desc limit 3;`;
    
     
    var instrucao = `select r.pontos, t.nome from resultados r
   join testes t on r.fk_teste = t.id
   where fk_user = ${idUsuario} order by pontos desc limit 3;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function media(idUsuario){
  //   var instrucao = `select avg(pontos) mediaP from resultados
  //  where fk_user = 1;`;
    
     
    var instrucao = `select round(avg(pontos), 2) mediaP from resultados
   where fk_user = ${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  cadastrarPontos,
    quantTestes,
    top3,
    media
}