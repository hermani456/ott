const express = require('express')
const router = express.Router()
const { otGet, otPost, otPut, otDelete, botPut, botGet } = require('../controllers/functions')
// const {verifyJwt} = require('../middleware/verifyJwt')

router.route('/')
    .get(otGet)
    .post(otPost)
    .put(otPut)
    .delete(otDelete)
router.route('/bot')
    .get(botGet)
    .put(botPut)

module.exports = router