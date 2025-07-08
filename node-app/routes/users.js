var express = require("express");
var router = express.Router();
const createUserService = require("../services/users/create/user-create.service");

/* GET users listing. */
router.get("/", function (req, res) {
  res.send("respond with a resource");
});

router.post("/create", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "Name, email, and password are required." });
  }
  console.log("Creating user with data:", { name, email, password });

  try {
    await createUserService({ name, email, password });
    res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user." });
  }
});

module.exports = router;
