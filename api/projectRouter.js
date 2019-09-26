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

//update()
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const change = req.body;
    if(!id) {
        res.status(404).json({ message: "ID not found" })
    } else {
        data.update(id, change)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                console.log("Check PUT on projectRouter for: ", err)
                res.status(500).json({ message: "There was an error updating this project"
                })
            })
    }
})

//remove()
router.delete('/:id', (req, res) => {
    const id = req.params.id
        data.remove(id)
            .then(response => {
                if(response && response > 0) {
                    res.status(200).json({ message: "Project deleted."})
                } else {
                    res.status(404).json({ message: "The project with this ID doesn't exist."})
                }
            })
            .catch(error => {
                console.log("Check DELETE on projectRouter for: ", err)
                res.status(500).json({ message: "There was an error deleting the project"
                })
            })
})

//getProjectActions()
router.get('/:id/actions', (req, res) => {
    const id = req.params.id;
    const project_id = req.body.project_id;
    if(!id) {
        res.status(404).json({message: "Actions not found"})
    } else {
        data.getProjectActions(id, project_id)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                console.log("Check GET for getProjectActions on projectRouter for: ", err)
                res.status(500).json({ message: "There was an error getting the project actions"
                })
            })
    }
})

function validateProject(req, res, next) {
    if(!req) res.status(400).json({ message: "missing post data" })
    if(!req.body.name) res.status(400).json({ message: "missing required name field" })
    if(!req.body.description) res.status(400).json({ message: "missing required description field" })
    next();

}


module.exports = router;