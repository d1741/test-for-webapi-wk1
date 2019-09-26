// Step two: set up action router and project router
// Step two docs: api = new folder, actionRouter.js, projectRouter.js, move server.js into api

const express = require('express');
const router = express.Router();
const data = require('../data/helpers/projectModel');

router.use(express.json())

router.get('/', (req,res) =>{
    res.status(200).send(`Project Router checking in`)
})

module.exports = router;