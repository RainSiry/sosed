const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: process.env.MYSQLHOST || 'localhost',
  port: process.env.MYSQLPORT || 3306,
  user: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || '',
  database: process.env.MYSQLDATABASE || 'sosed_db',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = db;