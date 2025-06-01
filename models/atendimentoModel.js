const conexao = require("../infraestrutura/conexao");

class AtendimentoModel {
  listar() {
    const sql = `SELECT * FROM atendimentos`;
    return new Promise((resolve, reject) => {
      conexao.query(sql, {}, (error, resposta) => {
        if (error) {
          console.log("Erro no listar...");
          reject(error);
        }
        console.log("Show!");
        resolve(resposta);
      })
    })
  }

  criar(novoAtendimento) {
    const sql = `INSERT INTO atendimentos SET ?`;
    return new Promise((resolve, reject) => {
      conexao.query(sql, novoAtendimento, (error, resposta) => {
        if (error) {
          console.log("Erro ao criar novo atendimento...");
          reject(error);
        }
        console.log("Atendimento criado com sucesso!");
        resolve(resposta);
      })
    })
  }

  atualizar(atendimentoAtualizado, id) {
    const sql = `UPDATE atendimentos SET ? WHERE id = ?`;
    return new Promise((resolve, reject) => {
      conexao.query(sql, [atendimentoAtualizado, id], (error, resposta) => {
        if (error) {
          console.log("Erro ao atualizar atendimento...");
          reject(error);
        }
        console.log("Atendimento atualizado com sucesso!");
        resolve(resposta);
      })
    })
  }

  deletar(id) {
    const sql = `DELETE FROM atendimentos WHERE id = ?`
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (error, resposta) => {
        if (error) {
          console.log("Erro ao deletar atendimento");
          reject(error)
        }
        console.log("Atendimento deletado com sucesso");
        resolve(resposta);
      })
    })
  }

}

module.exports = new AtendimentoModel();