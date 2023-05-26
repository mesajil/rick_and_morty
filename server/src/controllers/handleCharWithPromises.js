const { default: axios } = require("axios");


const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
    try {
        const { id } = req.params;
        axios.get(URL + id)
            .then(({ data }) => {
                res.status(200).json({
                    // Homework requirement
                    id: id,
                    status: data.status,
                    name: data.name,
                    species: data.species,
                    origin: data.origin,
                    image: data.image,
                    gender: data.gender,
                })
            })
            .catch(() => {
                res.status(404).send('Not found')
            })
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {
    getCharById,
}