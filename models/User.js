const pool = require('../database/connectdb');

const getAllUsers = async () => {
  const [rows] = await pool.query('SELECT * FROM tb_user');
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM tb_user WHERE id = ?', [id]);
  return rows[0];
};

const createUser = async (userData) => {
  const { username, email, password } = userData;
  const [result] = await pool.query('INSERT INTO tb_user (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
  return result.insertId;
};

const updateUser = async (id, userData) => {
  const { username, email, password } = userData;
  const [result] = await pool.query('UPDATE tb_user SET username = ?, email = ?, password = ? WHERE id = ?', [username, email, password, id]);
  return result.affectedRows > 0;
};

const deleteUser = async (id) => {
  const [result] = await pool.query('DELETE FROM tb_user WHERE id = ?', [id]);
  return result.affectedRows > 0;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
