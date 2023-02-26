const express = require("express");
const router = express.Router();
const { otGet, otPost, otPut, otDelete, caratulasGet } = require("../controllers/functions");
// const {verifyJwt} = require('../middleware/verifyJwt') protect routes
const roles_list = require("../config/roles_list");
const verifyRoles = require("../middleware/verifyRoles");
// post(verifyRoles(roles_list.admin), otPost)

router
  .route("/")
  .get(otGet, caratulasGet)
  .post(otPost)
  .put(otPut)
  .delete(otDelete);

module.exports = router;
