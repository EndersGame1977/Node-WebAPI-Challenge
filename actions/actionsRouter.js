const express = require("express");
const router = express.Router();

const db = require("../data/helpers/projectModel.js");

const projects = require("../data/helpers/projectModel.js");
const actions = require("../data/helpers/projectModel.js");

// Create Project
router.post("/", (req, res) => {
  const project = req.body;
  projects
    .insert(project)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

// Create action in project
router.post("/:id/actions", (req, res) => {
  db.getProjectActions(req.params.id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Read all projects
router.get("/", (req, res) => {
  projects
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

// Read just one project
router.get("/:id", (req, res) => {
  db.get(req.params.id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

router.get("/:id/actions", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {
  console.log(req.params.id);
});

//custom middleware

function validateUserId(req, res, next) {
  console.log("Validating user");
  if (req.params.id) {
    users.getById(req.params.id).then(user => {
      if (user) {
        console.log("User Object", user);
        req.user = user;
        next();
      } else {
        res.status(404).json({ message: "User not found" });
      }
    });
  } else {
    res.status(400).json({ message: "Please provide an ID" });
  }
}

function validateUser(req, res, next) {
  if (!req.body) {
    res.status(400).json({ message: "missing user data" });
  } else if (req.body.name) {
    next();
  } else {
    res.status(400).json({ message: "missing required name field" });
  }
}

//function validateUser(req, res, next) {
//const users = req.body;
//if (users.name) {
//next();
//} else {
//res.status(400).json({ message: "Missing a name" });
//}
//}

function validatePost(req, res, next) {
  const post = req.body;
  if (post.text) {
    next();
  } else {
    res.status(400).json({ message: "Post is missing text" });
  }
}

module.exports = router;
