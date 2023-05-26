use projetoIndividual;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
); 

insert into usuario values
(null, 'Gustavao', 'gustavo@morais.com', '123');

select * from usuario;

CREATE TABLE aviso (
	idAviso INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);
select * from aviso;

create table album(
idAlbum int primary key auto_increment,
acaso char(1), constraint chkVotacaoAcaso CHECK
	(acaso IN (0, 1)),
quarto char(1), constraint chkVotacaoQuarto CHECK
	(quarto IN (0, 1)),
rio char(1), constraint chkVotacaoRio CHECK
	(rio IN (0, 1)),
ciano char(1), constraint chkVotacaoCiano CHECK
	(ciano IN (0, 1)),
redencao char(1), constraint chkVotacaoRedencao CHECK
	(redencao IN (0, 1)),
revanche char(1), constraint chkVotacaoRevanche CHECK
	(revanche IN (0, 1)),
cemiterio char(1), constraint chkVotacaoCemiterio CHECK
	(cemiterio IN (0, 1)),
infinito char(1), constraint chkVotacaoInfinito CHECK
	(infinito IN (0, 1)),
mare char(1), constraint chkVotacaoMare CHECK
	(mare IN (0, 1)),
sinfonia char(1), constraint chkVotacaoSinfonia CHECK
	(sinfonia IN (0, 1)),
alegria char(1), constraint chkVotacaoAlegria CHECK
	(alegria IN (0, 1)),
virar char(1), constraint chkVotacaoVirar CHECK
	(virar IN (0, 1)));
    
ALTER TABLE album ADD COLUMN fkUsuario int,
	ADD CONSTRAINT fkUsuarioVotacao foreign key (fkUsuario)
		references usuario(idUsuario);
        
        select * from album;
    


    
    
    select * from usuario;
    
Select 
	sum(acaso) as acaso,
	sum(quarto) as quarto,
    sum(rio) as rio,
    sum(ciano) as ciano,
    sum(redencao) as redencao,
    sum(revanche) as revanche,
    sum(cemiterio) as cemiterio,
    sum(infinito) as infinito,
    sum(mare) as mare,
    sum(sinfonia) as sinfonia,
    sum(alegria) as alegria,
    sum(virar) as virar
from projetoindividual.album;

 insert into usuario values
(null, 'Clovao', 'clovis@lana.com', '123'),
(null, 'Jorginho', 'jorge@inho.com', '123');

insert into album values
(null, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1),
(null, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2);

select * from album;

select * from usuario;
