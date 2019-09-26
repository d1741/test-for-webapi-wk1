// Step one: import server, define port, set server to listen on port 3500;
// Step one docs: index.js + server.js

// Step two: set up action router and project router
// Step two docs: api = new folder, actionRouter.js, projectRouter.js, move server.js into api

// Step three: import actionRouter and projectRouter, set up server.use endpoints, update index.js to include /api folder
// Step three docs: server.js, index.js

const express = require("express");
const server = express();
const actionRouter = require('./actionRouter');
const projectRouter = require('./projectRouter');

server.use(express.json());
server.use('/actions', actionRouter);
server.use('/projects', projectRouter);

server.get('/', (req, res) => {
    res.send(`<h1>Server setup successful</h1>`)
})

module.exports = server;