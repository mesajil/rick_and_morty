const { default: axios } = require("axios");


const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(URL + id)
        if (!data) return res.status(404).send('Not found')
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
    } catch (error) {
        const { status, data } = error.response
        status === 404
            ? res.status(404).json(data)
            : res.status(500).send(error.message)
    }
}


module.exports = {
    getCharById,
}