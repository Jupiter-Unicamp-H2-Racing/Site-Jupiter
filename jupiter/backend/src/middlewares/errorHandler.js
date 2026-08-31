// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  if (err.code === 'ENOENT') {
    console.error('[jupiter-api] arquivo de dados não encontrado:', err.path);
    return res.status(500).json({ error: 'Dados indisponíveis no momento.' });
  }

  console.error('[jupiter-api] erro inesperado:', err);
  res.status(500).json({ error: 'Erro interno do servidor.' });
}

export default errorHandler;
