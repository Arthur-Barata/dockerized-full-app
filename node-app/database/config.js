const mysql = require("mysql2/promise");

const host = process.env.MYSQL_HOST || "localhost";
const user = process.env.MYSQL_USER || "root";
const password = process.env.MYSQL_PASSWORD || "";
const database = process.env.MYSQL_DATABASE || "test";

const pool = mysql.createPool({
  host,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
