// Step two: set up action router and project router
// Step two docs: api = new folder, actionRouter.js, projectRouter.js, move server.js into api

const express = require('express');
const router = express.Router();
const data = require('../data/helpers/projectModel');

router.use(express.json())

//get()
router.get('/', (req,res) =>{
    data.get()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "Project information could not be retrieved"})
        })
})

//insert()
router.post('/', (req,res) =>{ 
    data.insert({
        name: req.body.name,
        description: req.body.description
    })
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(error => {
            console.log("Check POST on projectRouter for: ", err)
            res.status(500).json({ message: "There was an error saving the new project"
            })
        })
})


module.exports = router;