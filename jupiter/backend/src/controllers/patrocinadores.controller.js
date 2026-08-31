import JsonRepository from '../repositories/jsonRepository.js';
import { createResourceController } from './createResourceController.js';

const patrocinadoresRepository = new JsonRepository('patrocinadores.json');

export const patrocinadoresController = createResourceController(patrocinadoresRepository);
export default patrocinadoresController;
