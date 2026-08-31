import JsonRepository from '../repositories/jsonRepository.js';
import { createResourceController } from './createResourceController.js';

const projetosRepository = new JsonRepository('projetos.json');

export const projetosController = createResourceController(projetosRepository);
export default projetosController;
