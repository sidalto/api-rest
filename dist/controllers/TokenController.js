"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);

class TokenController {
  async store(req, res) {
    const { email = '', senha = '' } = req.body;
    if (!email || !senha) {
      return res.status(401).json({
        erros: ['Credenciais inválidas'],
      });
    }
    const usuario = await _Usuario2.default.findOne({ where: { email } });
    if (!usuario) {
      return res.status(401).json({
        erros: ['Usuário não existe'],
      });
    }
    if (!(await usuario.verificaSenha(senha))) {
      return res.status(401).json({
        erros: ['Senha inválida'],
      });
    }
    const { id } = usuario;
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token });
  }
}

exports. default = new TokenController();
