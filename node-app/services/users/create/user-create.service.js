const pool = require("../../../database/config");

const createUserService = async (data) => {
  const sql = `INSERT INTO user (name, email, password) VALUES (?, ?, ?)`;
  try {
    await pool.query(sql, [data.name, data.email, data.password]);
  } catch (err) {
    console.error("Error in CreateUser service:", err);
    throw new Error("Failed to create user");
  }
};

module.exports = createUserService;
