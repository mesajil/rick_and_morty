const http = require('http')
const fs = require('fs')
// const data = require('./utils/data')
const getCharById = require('./controllers/getCharById')

http
    .createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const { url } = req
        
        if (url.includes("/rickandmorty/character")) {
            const id = Number(url.split('/').at(-1))
            // const character = data.find((e) => e.id === id) // Using test data
            const character = getCharById(res, id)
            // res.writeHead(200, { 'content-type': 'application/json' }) // There's no controller
            // res.end(character) // There's no controller
        }
        // else { // There's no controller
        //     res.writeHead(404, { 'content-type': 'text/plain' })
        //     res.end('ERROR: 404')
        // }
    })
    .listen(3001, 'localhost')