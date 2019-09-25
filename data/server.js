// Step one: import server, define port, set server to listen on port 3500;
// Step one docs: index.js + server.js

const express = require("express");
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h1>Server setup successful</h1>`)
})

module.exports = server;