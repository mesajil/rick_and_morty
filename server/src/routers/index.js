const express = require('express')
const morgan = require('morgan')
const charRouter = require('./charRouter')
const favRouter = require('./favRouter')
const loginRouter = require('./loginRouter')

const server = express()

server.use((req, res, next) => { // 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(morgan('dev'))
server.use(express.json()) 

// Routers
server.use('/rickandmorty', charRouter)
server.use('/rickandmorty', loginRouter)
server.use('/rickandmorty', favRouter)



module.exports = server
