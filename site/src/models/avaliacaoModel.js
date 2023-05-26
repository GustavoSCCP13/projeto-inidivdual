var database = require("../database/config");

function listar() {
    console.log("LISTANDO AVALIACOES:");
    var instrucao = `SELECT * FROM album WHERE email = '${email}' AND senha = '${senha} `;
    return database.executar(instrucao);
}

function enviar(album, usuario, mensagem, fkUsuario) {
    console.log("ENVIANDO AVALIACOES:");
    let data = new Date;
    var instrucao = `INSERT INTO album  VALUES ('${acaso}', '${quarto}', '${rio}', '${ciano}', '${redencao}', '${revanche}', '${cemiterio}', '${infinito}', '${mare}', '${sinfonia}', '${alegria}', '${virar}');`;
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