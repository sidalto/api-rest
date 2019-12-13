import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController';
import loginRequerido from '../middlewares/loginRequerido';

const router = new Router();

// Não deveria existir em uma aplicação real
// router.get('/', loginRequerido, usuarioController.index);
// router.get('/:id', loginRequerido, usuarioController.show);

router.post('/', loginRequerido, usuarioController.store);
router.put('/', loginRequerido, usuarioController.update);
router.delete('/', loginRequerido, usuarioController.delete);

export default router;
