var mysql = require('mysql');

var connMySQL = function () {
  //Conecta o banco de dados MySql
  console.log('conexao com bd ativada')
  return mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'xacomigobdsql'
  });
}

module.exports = function () {
  return connMySQL;
}

/*Host Local
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'xacomigobdsql'
*/

/*Host Umbler
host: 'mysql669.umbler.com',
    user: 'xacomigosql',
    password: 'xacomigo123sql',
    database: 'xacomigobdsql'
*/