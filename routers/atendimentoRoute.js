const { Router } = require("express");
const router = Router(); //cria a rota

//criando o crud com
// get post put delete

router.get("/atendimentos", (req, res) => {
  res.send("Chegou aqui, estamos listando todos os atendimentos");
});

router.post("/atendimentos", (req, res) => {
  res.send("Chegou aqui, estamos criando um novo atendimento...");
})


router.put("/atendimento/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Chegou aqui, estamos atualizando o atendimento ${id}...`);
})

router.delete("/atendimento/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Deletamos o atendimento ${id}...`);
})

module.exports = router;