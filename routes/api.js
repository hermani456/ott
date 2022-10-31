const express = require("express");
const router = express.Router();
const { otGet, otPost, otPut, otDelete } = require("../controllers/functions");
// const {verifyJwt} = require('../middleware/verifyJwt') protect routes
const roles_list = require("../config/roles_list");
const verifyRoles = require("../middleware/verifyRoles");

router
  .route("/")
  .get(otGet)
  .post(verifyRoles(roles_list.admin), otPost)
  .put(otPut)
  .delete(otDelete);

module.exports = router;
