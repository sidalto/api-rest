import Usuario from '../models/Usuario';

class UsuarioController {
  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll({
        attributes: {
          exclude: ['senha_hash', 'created_at', 'updated_at'],
        },
      });
      return res.json(usuarios);
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }

  async store(req, res) {
    try {
      const usuario = await Usuario.create(req.body);
      const { id, nome, email } = usuario;
      return res.json({ id, nome, email });
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }

  async show(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.id, {
        attributes: {
          exclude: ['senha_hash', 'created_at', 'updated_at'],
        },
      });
      if (!usuario) {
        return res.status(400).json({ erros: ['Usuário inválido'] });
      }
      return res.json(usuario);
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }

  async update(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.id, {
        attributes: {
          exclude: ['senha_hash', 'created_at', 'updated_at'],
        },
      });
      if (!usuario) {
        return res.status(400).json({ erros: ['Usuário inválido'] });
      }
      const usuarioAtualizado = await usuario.update(req.body);
      return res.json(usuarioAtualizado);
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.id, {
        attributes: {
          exclude: ['senha_hash', 'created_at', 'updated_at'],
        },
      });
      if (!usuario) {
        return res.status(400).json({ erros: ['Usuário inválido'] });
      }
      await usuario.destroy(usuario);
      return res.json(usuario);
    } catch (erro) {
      return res.status(400).json({
        erros: erro.errors.map((e) => e.message),
      });
    }
  }
}

export default new UsuarioController();
