const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

// In-memory data store
let users = [
  { id: 1, name: "SHREYA KUMARI", email: "shreya@example.com" },
  { id: 2, name: "Naman Jain", email: "Naman@example.com" },
  { id: 3, name: "Anshul Madan", email: "anshul@example.com" }
];

// Welcome endpoint
app.get('/api/welcome', (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// Users API endpoints
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);
  
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  
  res.json(user);
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }
  
  const id = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  const newUser = { id, name, email };
  users.push(newUser);
  
  res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  
  const userIndex = users.findIndex(user => user.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  
  const updatedUser = { 
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email
  };
  
  users[userIndex] = updatedUser;
  
  res.json(updatedUser);
});

app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  const userIndex = users.findIndex(user => user.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  
  const deletedUser = users[userIndex];
  users = users.filter(user => user.id !== id);
  
  res.json(deletedUser);
});

// Export the serverless function
module.exports.handler = serverless(app); 