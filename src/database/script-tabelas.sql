-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
create database BalletContexto;

use BalletContexto;

create table BalletContexto.usuario (
id int auto_increment primary key,
nome varchar(40) not null,
email varchar(45) not null,
senha varchar(20) not null
);

create table BalletContexto.testes (
id int auto_increment primary key,
nome varchar(25)
);

create table BalletContexto.resultados (
id int auto_increment primary key,
fk_user int not null,
fk_teste int not null,
pontos int not null,
constraint fk_user_resultado foreign key (fk_user) references usuario(id),
constraint fk_teste_resultado foreign key (fk_teste) references testes(id)
);

-- alter table usuario rename usuarios;

alter table BalletContexto.resultados add colomn data realizada datatime default now();

show tables;

-- nº de testes
select count(r.id) from resultados r
join usuario u on r.fk_user = u.id;

-- pontuação media
select sum(r.pontos) from resultados r
join usuario u on r.fk_user = u.id;

