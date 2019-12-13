import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/app';

class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo obrigatório',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo obrigatório',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
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

export default Foto;
