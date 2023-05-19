var database = require("../database/config");

function listar() {
    console.log("LISTANDO AVALIACOES:");
    var instrucao = `SELECT * FROM album WHERE email = '${email}' AND senha = '${senha} `;
    return database.executar(instrucao);
}

function enviar(titulo, estrelas, mensagem, fkUsuario) {
    console.log("ENVIANDO AVALIACOES:");
    let data = new Date;
    var instrucao = `INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');`;
    return database.executar(instrucao);
}


async function resultadoVotacao(){
    var instrucao = `
    select * from album;
    `

    var r = await database.executar(instrucao)
    console.log(r);
    return r

}


module.exports = {
    listar,
    enviar,
    resultadoVotacao
}