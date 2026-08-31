import JsonRepository from '../repositories/jsonRepository.js';
import { createResourceController } from './createResourceController.js';

const integrantesRepository = new JsonRepository('integrantes.json');

export const integrantesController = createResourceController(integrantesRepository);
export default integrantesController;
