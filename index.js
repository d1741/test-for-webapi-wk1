// Step one: import server, define port, set server to listen on port 3500;
// Step one docs: index.js + server.js

// Step two: set up action router and project router
// Step two docs: api = new folder, actionRouter.js, projectRouter.js, move server.js into api
const server = require('./api/server.js')

const port = process.env.PORT || 3500;

server.listen(port, () => {
    console.log(`Server up and running on port ${port}`)
})