const pool = require("./config");

const seedDatabase = async () => {
  const seedSql = `
        CREATE TABLE IF NOT EXISTS people (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL
        )
      `;
  const createPersonSql = "INSERT INTO people (name) VALUES (?)";

  try {
    await pool.execute(seedSql);
    await pool.query(createPersonSql, ["Docker master"]);
  } catch (err) {
    console.error("Failed to seed database:", err);
    throw new Error("Failed to seed database");
  }
};

module.exports = seedDatabase;
