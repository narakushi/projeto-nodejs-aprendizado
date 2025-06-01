const { Router } = require("express");
const router = Router(); //cria a rota
const atendimentoController = require("../controllers/atendimentoController");

//criando o crud com
// get post put delete

router.get("/atendimentos", atendimentoController.buscar);

router.post("/atendimentos", atendimentoController.criar);

router.put("/atendimento/:id", atendimentoController.atualizar);

router.delete("/atendimento/:id", atendimentoController.deletar)

module.exports = router;