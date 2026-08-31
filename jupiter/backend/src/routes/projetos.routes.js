import { Router } from 'express';
import projetosController from '../controllers/projetos.controller.js';

const router = Router();

router.get('/', projetosController.list);
router.get('/:id', projetosController.getById);

export default router;
