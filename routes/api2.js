const express = require("express");
const router = express.Router();
const { caratulasGet } = require("../controllers/functions");

router
  .route("/")
  .get(caratulasGet)

module.exports = router;
