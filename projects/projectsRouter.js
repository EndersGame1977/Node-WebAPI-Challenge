const express = require("express");
const router = express.Router();

const projects = require("../data/helpers/projectModel.js");
const actions = require("../data/helpers/actionModel.js");

// CRUD, Create, Read, Update, Delete
// CRUD is finished on Projects
// CRUD is not finished on Actions

//*** Projects ***//
// Read all projects
router.get("/", (req, res) => {
  // helper
  projects
    .get()
    // promise
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});
// Read a project
router.get("/:id", (req, res) => {
  // helper
  projects
    .get(req.params.id)
    // promise
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});
// Create project
router.post("/", (req, res) => {
  // helper
  projects
    .insert(req.body)
    // promise
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});
// Delete a project
router.delete("/:id", (req, res) => {
  // helper
  projects
    .remove(req.params.id)
    // promise
    .then(res.status(200).json({ message: "Project deleted" }))
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});
// Update a project
router.put("/:id", (req, res) => {
  // helper
  projects
    .update(req.params.id, req.body)
    // promise
    .then(res.status(200).json({ message: "Updated project" }))
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

//*** Actions ***//
// Read a action
router.get("/actions/:id", (req, res) => {
  // helper
  actions
    .get(req.params.id)
    // promise
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

// Update a action
router.put("/actions/:id", (req, res) => {
  // helper
  actions
    .update(req.params.id, req.body)
    // promise
    .then(res.status(200).json({ message: "Updated project with action" }))
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
