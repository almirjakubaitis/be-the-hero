/**
 * Rota / Recurso
 * 
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos (/:id - users/1)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

 /**
  * SQL: MySQL, SQLite: PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  * 
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: Table('users').select('*').where()
   * 
   */

   //app.get('/users/:id' , (request, response) => {
   //app.post('/users' , (request, response) => {

   //const params = request.query;
   //const params = request.params;
   //const params = request.body;