const mysql = require("mysql");

//criando a conexão com mysql

const conexao = mysql.createConnection({
  host: "localhost", //localizacao do banco (passar uma var ambiente para facilitar)
  port: 3306, // porta padrao do mysql
  user: "taina", //usuario do bacno
  password: "root1234",
  database: "controle_atendimento",
})

module.exports = conexao;