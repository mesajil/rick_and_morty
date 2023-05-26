const http = require('http')
const data = require('./utils/data') // test data

/**
 * This file doesn't use controllers, uses http server and test data from 'utils'
 */

const PORT = 3001
const URL = 'localhost'

http
    .createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const { url } = req
        // console.log(url);
        if (url.includes("/rickandmorty/character")) {
            const id = Number(url.split('/').at(-1))
            // console.log(id);
            const character = data.find((e) => e.id === id)
            console.log(character);
            res.writeHead(200, { 'content-type': 'application/json' })
            res.end(JSON.stringify(character))
        }
        else {
            res.writeHead(404, { 'content-type': 'text/plain' })
            res.end(`Character not found`)
        }
    })
    .listen(PORT, URL)