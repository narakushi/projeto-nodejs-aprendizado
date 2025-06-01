const { Router } = require("express");
const router = Router(); //cria a rota
const atendimentoController = require("../controllers/atendimentoController");

//criando o crud com
// get post put delete

router.get("/atendimentos", (req, res) => {
  const listaAtendimentos = atendimentoController.buscar(); //integrando controller
  listaAtendimentos.then(atendimentos => res.status(200).json(atendimentos))
    .catch(error => res.status(400).json(error.message))
});

router.post("/atendimentos", (req, res) => {
  const novoAtendimento = req.query; //req.body não estava funcionando
  const atendimento = atendimentoController.criar(novoAtendimento);
  atendimento.then(atendimentoCriado => res.status(201).json(atendimentoCriado))
    .catch(error => res.status(400).json(error.message));
})


router.put("/atendimento/:id", (req, res) => {
  const { id } = req.params;
  const atendimentoAtualizado = req.query;
  const atendimento = atendimentoController.atualizar(atendimentoAtualizado, id);
  atendimento.then((resultAtendimentoAtualizado) => res.status(200).json(resultAtendimentoAtualizado))
    .catch((error) => res.status(400).json(error.message));
})

router.delete("/atendimento/:id", (req, res) => {
  const { id } = req.params;
  const atendimento = atendimentoController.deletar(id);
  atendimento.then((resultAtendimentoDel) => res.status(200).json(resultAtendimentoDel)).
    catch((error) => res.status(400).json(error.message));
})

module.exports = router;