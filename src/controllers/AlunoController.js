import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ['id', 'nome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
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
      const aluno = await Aluno.create(req.body);
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
      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
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
      const aluno = await Aluno.findByPk(id);
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
      const aluno = await Aluno.findByPk(id);
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

export default new AlunoController();
