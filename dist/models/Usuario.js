"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

class Usuario extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'O nome deve ter entre 3 e 50 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      senha_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      senha: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 50],
            msg: 'A senha deve ter entre 8 e 50 caracteres',
          },
        },
      },
    },
    {
      sequelize,
    });

    this.addHook('beforeSave', async (usuario) => {
      if (usuario.senha) {
        usuario.senha_hash = await _bcryptjs2.default.hash(usuario.senha, 10);
      }
    });

    return this;
  }

  verificaSenha(senha) {
    return _bcryptjs2.default.compare(senha, this.senha_hash);
  }
}

exports. default = Usuario;
