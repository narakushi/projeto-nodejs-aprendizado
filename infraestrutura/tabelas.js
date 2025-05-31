class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarTabelaAtendimentos();
  }

  criarTabelaAtendimentos() {
    const sql =
      `
    CREATE TABLE IF NOT EXISTS atendimentos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    DATA DATE,
    SERVICO VARCHAR(100),
    CLIENT VARCHAR(100),
    STATUS ENUM("ativo", "realizado", "cancelado") DEFAULT "ativo"
  );
    `;

    this.conexao.query(sql, (error) => {
      if (error) {
        console.log("Eita! Deu erro na hora de criar a tabela atendimentos"); //pode ser um tratamento com try catch
        console.log(error.message);
        return;
      }

      console.log("Show criou a tabela atendimentos");
    })
  }
}

module.exports = new Tabelas();