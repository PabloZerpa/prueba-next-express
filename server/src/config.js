require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS
});

pool.getConnection(function(err, conn){
  if(err)
    throw err
  else
  console.log('Conexion exitosa');
})

module.exports = pool;
