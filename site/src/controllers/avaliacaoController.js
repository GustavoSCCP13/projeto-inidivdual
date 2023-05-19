var avaliacaoModel = require("../models/avaliacaoModel");

function listar(req, res) {
    avaliacaoModel.listar()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function enviar(req, res) {

    var id_cd = req.body.id_cd;
    var id_usuario = req.body.id_usuario;


    avaliacaoModel.enviar(titulo, estrelas, mensagem, fkUsuario)
    .then(function (resultado) {
        
            res.status(200).json(resultado);
        
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

async function resultadoVotacao(req,res){

   var resultado = await avaliacaoModel.resultadoVotacao();
   console.log(resultado)
   res.status(200).json(resultado);




}

module.exports = {
    listar,
    enviar,
    resultadoVotacao
}