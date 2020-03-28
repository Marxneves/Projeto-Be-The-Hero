const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes =  require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports =app;
/*
 * Métodos HTTP
 *
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parametros nomeados enviados na rota após "?"(Filtros, paginação)
 * Routr Params: Parametros utilizados para identificar recursos.
 * Request Body: Corpo da requisição, utilizando 
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

