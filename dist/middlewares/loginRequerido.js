"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);

async function loginRequerido(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      erros: ['Login requerido'],
    });
  }
  const [, token] = authorization.split(' ');
  try {
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    const usuario = await _Usuario2.default.findOne({
      where: {
        id,
        email,
      },
    });
    if (!usuario) {
      return res.status(401).json({
        erros: ['Usuário inválido'],
      });
    }
    req.id = id;
    req.email = email;
    return next();
  } catch (erro) {
    return res.status(401).json({
      erros: ['Token expirado ou inválido'],
    });
  }
}

exports. default = loginRequerido;
