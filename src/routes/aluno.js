import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequerido from '../middlewares/loginRequerido';

const router = new Router();

router.get('/', alunoController.index);
router.get('/:id', alunoController.show);
router.put('/:id', loginRequerido, alunoController.update);
router.delete('/:id', loginRequerido, alunoController.delete);
router.post('/', loginRequerido, alunoController.store);

export default router;
