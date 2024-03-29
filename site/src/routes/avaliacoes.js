var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

router.get("/listar", function(req, res) {
    avaliacaoController.listar(req, res);
});

router.post("/enviar", function(req, res){
    avaliacaoController.enviar(req, res);
});

router.get("/resultadoVotacao", function(req,res){
    avaliacaoController.resultadoVotacao(req,res)
})


module.exports = router;