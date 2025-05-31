const express = require('express');
const app = express();
const port = 3000;
const router = require('./routers/index');
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabelas");

// app.use(router);

//acionando a conexão com o banco
tabelas.init(conexao);

//acionando as rotas
router(app);

app.listen(port, (error) => {
  if (error) {
    console.log("Deu erro", error)
    return;
  }
  console.log("Subiu show");

})