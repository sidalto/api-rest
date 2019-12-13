"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _app = require('../config/app'); var _app2 = _interopRequireDefault(_app);

class Foto extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo obrigatório',
          },
        },
      },
      filename: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo obrigatório',
          },
        },
      },
      url: {
        type: _sequelize2.default.VIRTUAL,
        get() {
          return `${_app2.default.url}/images/${this.getDataValue('filename')}`;
        },
      },
    },
    {
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }

  static associar(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}

exports. default = Foto;
