import express from 'express';
import cors from 'cors';

import integrantesRoutes from './routes/integrantes.routes.js';
import patrocinadoresRoutes from './routes/patrocinadores.routes.js';
import projetosRoutes from './routes/projetos.routes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'jupiter-backend' });
});

app.use('/api/integrantes', integrantesRoutes);
app.use('/api/patrocinadores', patrocinadoresRoutes);
app.use('/api/projetos', projetosRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada.' });
});

app.use(errorHandler);

export default app;
