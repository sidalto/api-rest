"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);

class UsuarioController {
  async index(req, res) {
    try {
      const usuarios = await _Usuario2.default.findAll({
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
      const usuario = await _Usuario2.default.create(req.body);
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
      const usuario = await _Usuario2.default.findByPk(req.id, {
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
      const usuario = await _Usuario2.default.findByPk(req.id, {
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
      const usuario = await _Usuario2.default.findByPk(req.id, {
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

exports. default = new UsuarioController();
