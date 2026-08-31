import { Router } from 'express';
import patrocinadoresController from '../controllers/patrocinadores.controller.js';

const router = Router();

router.get('/', patrocinadoresController.list);
router.get('/:id', patrocinadoresController.getById);

export default router;
