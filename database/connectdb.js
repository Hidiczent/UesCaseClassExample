const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost', // แก้ไขเป็น host ของฐานข้อมูลคุณ
  user: 'root', // แก้ไขเป็น username ของฐานข้อมูลคุณ
  password: '', // แก้ไขเป็น password ของฐานข้อมูลคุณ
  database: 'homework', // แก้ไขเป็นชื่อฐานข้อมูลของคุณ
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
