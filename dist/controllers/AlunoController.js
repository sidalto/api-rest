"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await _Aluno2.default.findAll({
        attributes: ['id', 'nome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['url', 'originalname', 'filename'],
        },
      });
      return res.json(alunos);
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }

  async store(req, res) {
    try {
      const aluno = await _Aluno2.default.create(req.body);
      return res.json(aluno);
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ['Falta o ID do usuário'],
        });
      }
      const aluno = await _Aluno2.default.findByPk(id, {
        attributes: ['id', 'nome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['url', 'originalname', 'filename'],
        },
      });
      if (!aluno) {
        return res.status(400).json({
          erros: ['Aluno não existe'],
        });
      }
      return res.json(aluno);
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ['Falta o ID do usuário'],
        });
      }
      const aluno = await _Aluno2.default.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          erros: ['Aluno não existe'],
        });
      }
      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erros: ['Falta o ID do usuário'],
        });
      }
      const aluno = await _Aluno2.default.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          erros: ['Aluno não existe'],
        });
      }
      await aluno.destroy();
      return res.json(aluno);
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }
}

exports. default = new AlunoController();
