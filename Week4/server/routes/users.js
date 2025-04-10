const express = require('express');
const router = express.Router();

// In-memory user data store
let users = [
  { id: 1, name: "Shreya Kumari", email: "shreya@example.com" },
  { id: 2, name: "Naman Jain", email: "Naman@example.com" },
  { id: 3, name: "Anshul Madan", email: "anshul@example.com" }
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// GET user by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);
  
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  
  res.json(user);
});

// POST new user
router.post('/', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }
  
  // Generate new ID (simple implementation)
  const id = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  
  const newUser = { id, name, email };
  users.push(newUser);
  
  res.status(201).json(newUser);
});

// PUT update user
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  
  const userIndex = users.findIndex(user => user.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  
  // Update user properties
  const updatedUser = { 
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email
  };
  
  users[userIndex] = updatedUser;
  
  res.json(updatedUser);
});

// DELETE user
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  const userIndex = users.findIndex(user => user.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  
  const deletedUser = users[userIndex];
  users = users.filter(user => user.id !== id);
  
  res.json(deletedUser);
});

module.exports = router; 