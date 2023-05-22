const axios = require('axios')
const API_URL = "https://rickandmortyapi.com/api/character/"

/**
 * This controller uses Axios to handle response object.
 * @param {object} res response
 * @param {number} id 
 */
const getCharById = (res, id) => {
    axios
        .get(`${API_URL}${id}`)
        .then(({ data }) => {
            const character = {
                id: id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status,
            }
            res.writeHead(200, { 'content-type': 'application/json' })
            res.end(JSON.stringify(character))
            console.log(`Character ${id} found`); // dev control
        })
        .catch((error) => {
            res.writeHead(500, { 'content-type': 'text/plain' })
            res.end(error.message)
            console.log(`Character ${id} not found`); // dev control
        })
}


module.exports = getCharById;