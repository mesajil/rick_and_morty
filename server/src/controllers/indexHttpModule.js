

const deleteFav = (req, res) => {
    try {
        const { id } = req.params
        myFavorites = myFavorites.filter(fav => fav.id !== id)
        res.writeHead(200, { 'content-type': 'application/json' })
        res.json(myFavorites)
    } catch (error) {
        res.writeHead(500, { 'content-type': 'text/plain' })
        res.end(error.message)
    }
}

const postFav = (req, res) => {

    try {
        myFavorites.push(req.body)
        res.writeHead(200, { 'content-type': 'application/json' })
        res.json(myFavorites)
    } catch (error) {
        res.writeHead(500, { 'content-type': 'text/plain' })
        res.end(error.message)
    }
}


const getLoginAccess = (req, res) => {
    try {
        const { email, password } = req.query
        const user = users.find(e => {
            return e.email == email && e.password == password
        })

        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(JSON.stringify({
            access: (user ? true : false)
        }))

    } catch (error) {
        res.writeHead(500, { 'content-type': 'text/plain' })
        res.end(error.message)
    }

}


/**
 * This controller uses Axios to handle response object.
 * @param {object} res response
 * @param {number} id 
 */
const getCharByIdAxios = (res, id) => {
    axios
        .get(`${CHAR_URL}${id}`)
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
            console.log(`Character ${id} found`); // dev log
        })
        .catch((error) => {
            res.writeHead(500, { 'content-type': 'text/plain' })
            res.end(error.message)
            console.log(`Character ${id} not found`); // dev log
        })
}



const getCharById = (req, res) => {
    try {
        const { id } = req.params
        axios
            .get(`${CHAR_URL}${id}`)
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
                console.log(`Character ${id} found`); // dev log
            })
            .catch((error) => {
                res.writeHead(404, { 'content-type': 'text/plain' })
                res.end("Not found")
                console.log(`Character ${id} not found`); // dev log
            })
    } catch (error) {
        res.writeHead(500, { 'content-type': 'text/plain' })
        res.end(error.message)
    }
}