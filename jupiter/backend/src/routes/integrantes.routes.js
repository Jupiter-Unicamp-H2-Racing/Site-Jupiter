import { Router } from 'express';
import integrantesController from '../controllers/integrantes.controller.js';

const router = Router();

router.get('/', integrantesController.list);
router.get('/:id', integrantesController.getById);

export default router;
