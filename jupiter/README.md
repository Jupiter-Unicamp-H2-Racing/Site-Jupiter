# Jupiter — Site oficial

Site da Jupiter, equipe da Unicamp que desenvolve veículos movidos a
hidrogênio. Monorepo com frontend em React (Vite) e backend em Node/Express,
sem banco de dados — os dados de integrantes, patrocinadores e projetos ficam
em arquivos JSON.

## Estrutura

```
jupiter/
├── docker-compose.yml
├── .env.example
├── backend/                # API REST (Express)
│   ├── data/                # integrantes.json, patrocinadores.json, projetos.json
│   └── src/
│       ├── routes/           # define os endpoints
│       ├── controllers/      # lógica de cada rota (list / getById)
│       ├── repositories/     # única camada que lê/escreve os arquivos JSON
│       └── middlewares/
└── frontend/                # SPA (React + Vite)
    ├── nginx.conf            # serve os arquivos estáticos e faz proxy de /api
    └── src/
        ├── pages/             # Home, Projetos, Patrocinadores, Contato
        ├── components/
        ├── layouts/
        └── services/          # api.js (fetch) + useFetch.js
```

## Rodando em desenvolvimento

Backend:
```bash
cd backend
npm install
npm run dev        # http://localhost:3000
```

Frontend (em outro terminal):
```bash
cd frontend
npm install
npm run dev         # http://localhost:5173, com proxy de /api para o backend
```

## Rodando em produção (Docker Compose)

No servidor, com Docker e Docker Compose instalados:

```bash
cp .env.example .env    # opcional, ajuste HTTP_PORT se quiser outra porta
docker compose up -d --build
```

O site fica disponível em `http://<ip-do-servidor>` (porta 80 por padrão).
O nginx do container `frontend` serve os arquivos estáticos e repassa tudo
que chega em `/api/*` para o container `backend` — não é preciso expor a
porta do backend nem lidar com CORS.

Para atualizar depois de alterar código:
```bash
docker compose up -d --build
```

## Editando os dados do site

Os arquivos em `backend/data/*.json` são a fonte de verdade de integrantes,
patrocinadores e projetos. Edite-os diretamente (no servidor, o volume do
Compose aponta para essa mesma pasta, então não é preciso rebuildar a
imagem — só reiniciar o container do backend):

```bash
docker compose restart backend
```

## Painel administrativo (futuro)

O backend já está organizado para isso: `repositories/jsonRepository.js` é a
única peça que toca nos arquivos JSON e já expõe `saveAll()`. Um futuro
painel admin só precisa:

1. Adicionar rotas `POST/PUT/DELETE` nos `controllers/*.controller.js`
   existentes (reaproveitando o mesmo repositório).
2. Adicionar autenticação nessas rotas de escrita.
3. Construir uma interface (pode ser um novo serviço no Compose) que
   consome essas rotas.

Nenhuma mudança estrutural é necessária no restante do projeto.
