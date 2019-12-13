import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import Usuario from '../models/Usuario';
import Foto from '../models/Foto';

const connection = new Sequelize(databaseConfig);

Aluno.init(connection);
Usuario.init(connection);
Foto.init(connection);
Aluno.associar(connection.models);
Foto.associar(connection.models);
