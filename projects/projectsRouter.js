const express = require("express");
const router = express.Router();

const projects = require("../data/helpers/projectModel.js");
const actions = require("../data/helpers/projectModel.js");

// CRUD, Create, Read, Update, Delete

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

// Read actions on a project
router.get("/:id/actions", (req, res) => {
  // helper
  projects
    .get(req.params.id)
    // promise
    .then(project => {
      res.status(200).json(project.actions);
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

// Create action on a project
router.post("/:id/actions", (req, res) => {});

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
router.put("/:id", (req, res) => {});

module.exports = router;
