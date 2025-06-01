const express = require('express');
const app = express();
const port = 3000;
const router = require('./routers/index');
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabelas");

// app.use(router);

//acionando as rotas
router(app, express);

//acionando a conexão com o banco
tabelas.init(conexao);



app.listen(port, (error) => {
  if (error) {
    console.log("Deu erro", error)
    return;
  }
  console.log("Subiu show");

})