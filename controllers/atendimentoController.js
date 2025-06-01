const atendimentoModel = require("../models/atendimentoModel");

class AtendimentoController {
  buscar(req, res) {
    const listaAtendimentos = atendimentoModel.listar(); //integrando model
    return listaAtendimentos.then(atendimentos => res.status(200).json(atendimentos))
      .catch(error => res.status(400).json(error.message))
  }
  criar(req, res) {
    const novoAtendimento = req.query; //req.body não estava funcionando
    const atendimento = atendimentoModel.criar(novoAtendimento);
    return atendimento.then(atendimentoCriado => res.status(201).json(atendimentoCriado))
      .catch(error => res.status(400).json(error.message));
  }
  atualizar(req, res) {
    const { id } = req.params;
    const atendimentoAtualizado = req.query;
    const atendimento = atendimentoModel.atualizar(atendimentoAtualizado, id);
    return atendimento.then((resultAtendimentoAtualizado) => res.status(200).json(resultAtendimentoAtualizado))
      .catch((error) => res.status(400).json(error.message));
  }
  deletar(req, res) {
    const { id } = req.params;
    const atendimento = atendimentoModel.deletar(id);
    return atendimento.then((resultAtendimentoDel) => res.status(200).json(resultAtendimentoDel)).
      catch((error) => res.status(400).json(error.message));
  }
}

module.exports = new AtendimentoController();