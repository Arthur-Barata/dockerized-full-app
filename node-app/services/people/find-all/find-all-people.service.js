const pool = require("../../../database/config");

const findAllPeopleService = async () => {
  const findAllPeopleSql = "SELECT * FROM people";

  try {
    const [rows] = await pool.query(findAllPeopleSql);

    return rows;
  } catch (err) {
    console.error("Failed to find people:", err);
    throw new Error("Failed to find people:");
  }
};

module.exports = findAllPeopleService;
