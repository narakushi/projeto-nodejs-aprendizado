class AtendimentoController {
  buscar() {
    return "Buscando atendimentos..."
  }
  criar() {
    return "Criando atendimento";
  }
  atualizar(id) {
    return `Alterando o atendimento ${id}`
  }
  deletar(id) {
    return `deletando o atendimento numero ${id}`
  }
}

module.exports = new AtendimentoController();