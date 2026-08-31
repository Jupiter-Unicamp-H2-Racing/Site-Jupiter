// Em produção, o nginx faz proxy de /api para o backend (ver frontend/nginx.conf).
// Em desenvolvimento (npm run dev), o proxy equivalente está em vite.config.js.
const API_BASE_URL = '/api';

async function request(path) {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Falha ao buscar ${path}: HTTP ${response.status}`);
  }

  return response.json();
}

export const api = {
  getIntegrantes: () => request('/integrantes'),
  getPatrocinadores: () => request('/patrocinadores'),
  getProjetos: () => request('/projetos'),
};

export default api;
