// Step two: set up action router and project router
// Step two docs: api = new folder, actionRouter.js, projectRouter.js, move server.js into api

// Step four: CRUD setup (get,insert,update,remove)
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
router.post('/', validateAction, (req, res) => {
    data.insert({
            id: req.body.id, 
            project_id: req.body.project_id,
            description: req.body.description,
            notes: req.body.notes.id,
            completed: req.body.completed
        })
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            console.log("Check action router POST for error", error)
            res.status(500).json({message: 'Could not POST insert() action'})
        })
})

//update()
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const change = req.body;
    if(!id) {
        res.status(404).json({ message: "ID not found"})
    } else {
        data.update(id, change)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(error => {
                console.log("Check action router PUT for error", error)
                res.status(500).json({message: 'Could not PUT update() action'})
            })
    }
})

//remove()
router.delete('/:id', (req, res) => {
    const id = req.params.id
    if(!id) {
        res.status(404).json({ message: "ID not found"})
    } else {
        data.remove(id)
            .then(response => {
                res.status(200).json({ message: "Action removed successfully"})
            })
            .catch(error => {
                console.log("Check action router DELETE for error", error)
                res.status(500).json({message: 'Could not DELETE action'})
            })
    }
})

function validateAction(req, res, next) {
    if(!req) res.status(400).json({message: "missing information in post"})
    // if(!res.body.id) res.status(400).json({ message: "missing project_id"})
    if(!req.body.description) res.status(400).json({message: "missing description"})
    if(!req.body.notes) res.status(400).json({message: "missing notes"})
    next();
}
module.exports = router;