// Step one: import server, define port, set server to listen on port 3500;
// Step one docs: index.js + server.js

const server = require('./server.js')

const port = process.env.PORT || 3500;

server.listen(port, () => {
    console.log(`Server up and running on port ${port}`)
})