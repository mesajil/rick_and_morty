const { deleteFav, postFav, getFav } = require("../controllers/handleFavorites")
const router = require('express').Router()


router.post(`/fav`, postFav)
router.get(`/fav`, getFav)
router.delete(`/fav/:id`, deleteFav)


module.exports = router