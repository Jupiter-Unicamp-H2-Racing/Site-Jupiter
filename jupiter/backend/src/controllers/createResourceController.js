/**
 * Cria um controller CRUD-somente-leitura para uma entidade baseada em JSON.
 *
 * Hoje só expomos GET (listar / buscar por id), mas manter a lógica aqui
 * (em vez de direto na rota) deixa o caminho pronto para adicionar
 * POST/PUT/DELETE no futuro painel administrativo sem reescrever nada.
 *
 * @param {import('../repositories/jsonRepository.js').JsonRepository} repository
 */
export function createResourceController(repository) {
  return {
    async list(req, res, next) {
      try {
        const items = await repository.findAll();
        res.json(items);
      } catch (err) {
        next(err);
      }
    },

    async getById(req, res, next) {
      try {
        const item = await repository.findById(req.params.id);
        if (!item) {
          return res.status(404).json({ error: 'Recurso não encontrado.' });
        }
        res.json(item);
      } catch (err) {
        next(err);
      }
    },
  };
}

export default createResourceController;
