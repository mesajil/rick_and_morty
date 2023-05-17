const axios = require('axios')


const getCharById = (res, id) => {
    axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
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
            console.log(`Character ${id} found`); // Console message
        })
        .catch((error) => {
            res.writeHead(500, { 'content-type': 'text/plain' })
            res.end(error.message)
            console.log(`Character ${id} not found`); // Console message
        })
}


module.exports = getCharById;