const http = require('http')
const getCharById = require('./controllers/getCharById')


const PORT = 3001
const URL = 'localhost'


http
    .createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const { url } = req
        
        if (url.includes("/rickandmorty/character")) {
            const id = Number(url.split('/').at(-1))
            getCharById(res, id)
        }
    })
    .listen(PORT, URL)