const { getCharById } = require("../controllers")
const router = require('express').Router()




router.get(`/character/:id`, getCharById)



module.exports = router