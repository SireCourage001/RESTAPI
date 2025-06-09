const express = require('express');
const router = express.Router();

// In-memory data store
let users = [];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// POST create a new user
router.post('/', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

// PUT update user
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users[id] = req.body;
  res.json(users[id]);
});

// DELETE a user
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users.splice(id, 1);
  res.status(204).send();
});

module.exports = router;
