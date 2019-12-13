"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _UsuarioController = require('../controllers/UsuarioController'); var _UsuarioController2 = _interopRequireDefault(_UsuarioController);
var _loginRequerido = require('../middlewares/loginRequerido'); var _loginRequerido2 = _interopRequireDefault(_loginRequerido);

const router = new (0, _express.Router)();

// Não deveria existir em uma aplicação real
// router.get('/', loginRequerido, usuarioController.index);
// router.get('/:id', loginRequerido, usuarioController.show);

router.post('/', _loginRequerido2.default, _UsuarioController2.default.store);
router.put('/', _loginRequerido2.default, _UsuarioController2.default.update);
router.delete('/', _loginRequerido2.default, _UsuarioController2.default.delete);

exports. default = router;
