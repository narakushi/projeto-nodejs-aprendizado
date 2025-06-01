const router = require('../routers');
const conexao = require("../infraestrutura/conexao");
const tabelas = require("../infraestrutura/tabelas");

module.exports = (app, express) => {
  //acionando as rotas
  router(app, express);

  //acionando a conexão com o banco
  tabelas.init(conexao);
}