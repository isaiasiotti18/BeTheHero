const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/** 
 * Rota / Recurso = /recurso
 */

/** 
 * Métodos HTTP
 *
 * GET: Buscar/Listar uma informação no Backend
 * POST: Criar uma informação no Backend
 * PUT: Alterar uma informação no Backend
 * DELETE: Deletar uma informação no Backend
 */

/**
 * Tipos de Paramêtros
 *
 * Query: Paramêtros nomeados enviados na rota após o simbolo de "?" (Filtos, Paginação)
 * Routes: Paramêtros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */


