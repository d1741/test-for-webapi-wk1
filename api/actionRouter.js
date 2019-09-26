// Step two: set up action router and project router
// Step two docs: api = new folder, actionRouter.js, projectRouter.js, move server.js into api

// Step four: CRUD setup
// Step four docs: actionRouter.js

const express = require("express");
const router = express.Router();
const data = require('../data/helpers/actionModel');

router.use(express.json())

//get()
router.get("/", (req, res) =>{
    data.get()
        .then( response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log("Check action router GET for error", error)
            res.status(500).json({message: 'Could not GET action information'})
        })
})

//insert()
router.post('/', (req, res) => {
    data.insert({
            project_id: req.body.project_id, 
            description: req.body.description,
            notes: req.body.notes
        })
        .then(response => {
            res.status(201).json("POST request results: ", response)
        })
        .catch(error => {
            console.log("Check action router POST for error", error)
            res.status(500).json({message: 'Could not POST insert() action'})
        })
})

//update()

module.exports = router;