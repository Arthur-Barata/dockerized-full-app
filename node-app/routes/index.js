var express = require("express");
var router = express.Router();
const seedDatabase = require("../database/seeder");
const findAllPeopleService = require("../services/people/find-all/find-all-people.service.js");

router.get("/", async function (req, res) {
  await seedDatabase();
  const rows = await findAllPeopleService();

  console.log("AAAAAAAQUI", rows);

  const names = rows.map((row) => row.name);

  res.render("index", {
    names,
  });
});

module.exports = router;
