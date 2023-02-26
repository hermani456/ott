const express = require("express");
const router = express.Router();
const {
  caratulasGet,
  caratulasPost,
  caratulasPut,
  caratulasDelete,
} = require("../controllers/functions");

router
  .route("/")
  .get(caratulasGet)
  .post(caratulasPost)
  .put(caratulasPut)
  .delete(caratulasDelete);

module.exports = router;
