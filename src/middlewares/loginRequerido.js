import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';

async function loginRequerido(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      erros: ['Login requerido'],
    });
  }
  const [, token] = authorization.split(' ');
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    const usuario = await Usuario.findOne({
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

export default loginRequerido;
