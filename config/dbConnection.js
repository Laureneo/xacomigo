var mysql = require('mysql');

var connMySQL = function () {
  //Conecta o banco de dado MySql
  console.log('conexao com bd ativada')
  return mysql.createConnection({
    host: 'mysql669.umbler.com',
    user: 'xacomigosql',
    password: 'xacomigo123sql',
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

/*
const mysql = require('mysql');

var connMySQL = function(){
  return mysql.createConnection({
    host: 'mysql669.umbler.com',
    user: 'xacomigosql',
    password: 'xacomigo123sql',
    database: 'xacomigobdsql'
  })
}

module.exports = function(){
  return connMySQL
}
*/

/*
const mysql = require('mysql');

var connection = function(){
  return mysql.createConnection({
    host: 'mysql669.umbler.com',
    user: 'xacomigosql',
    password: 'xacomigo123sql',
    database: 'xacomigobdsql'
  });
}


module.exports = function(){
  return connection
}
*/