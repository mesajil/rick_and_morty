let myFavorites = []

const postFav = (req, res) => {
    try {
        const { id } = req.body
        if (!id) return res.status(404).send('ID not found')
        myFavorites.push(req.body)
        res.status(200).json(myFavorites)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getFav = (req, res) => {
    try {
        res.status(200).json(myFavorites)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const deleteFav = (req, res) => {
    try {
        const { id } = req.params
        if (!id) return res.status(404).send('ID not found')
        myFavorites = myFavorites.filter(fav => fav.id !== Number(id))
        res.status(200).json(myFavorites)
    } catch (error) {
        res.status(500).send(error.message)
    }
}




module.exports = {
    postFav,
    deleteFav,
    getFav,
}