const express = require("express");
const router = express.Router();
const { handleLogout } = require("../controllers/logOut");

router.get("/", handleLogout);

module.exports = router;
