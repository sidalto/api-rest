"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

const connection = new (0, _sequelize2.default)(_database2.default);

_Aluno2.default.init(connection);
_Usuario2.default.init(connection);
_Foto2.default.init(connection);
_Aluno2.default.associar(connection.models);
_Foto2.default.associar(connection.models);
