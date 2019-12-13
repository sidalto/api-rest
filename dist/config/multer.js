"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  fileFilter: (req, file, callback) => {
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/png') {
      return callback(new _multer2.default.MulterError('Arquivo deve ter a extensão jpg, jpeg, png.'));
    }
    return callback(null, true);
  },
  storage: _multer2.default.diskStorage({
    destination: (req, file, callback) => {
      callback(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${aleatorio()}${_path.extname.call(void 0, file.originalname)}`);
    },
  }),
};
