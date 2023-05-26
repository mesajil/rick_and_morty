const express = require('express')
const { validLogin } = require('../controllers/login')

const router = express.Router()


router.get ('/login', validLogin)


module.exports = router


