var database = require("../database/config");

function listar() {
    console.log("LISTANDO AVALIACOES:");
    var instrucao = `SELECT * FROM album WHERE email = '${email}' AND senha = '${senha} `;
    return database.executar(instrucao);
}

function enviar(body) {
    let instrucao = `INSERT INTO album(${body.album}, fkUsuario) VALUES( 1, ${body.id_usuario} )`;
    console.log(instrucao)
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