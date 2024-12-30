const express = require('express');
const app = express();
app.use(express.json());

// Sample database interaction (replace with your actual database logic)
const db = {
  async createUser(user) {
    // Simulate database operation, potentially throwing errors
    if (!user.name || !user.email) {
      throw new Error('Missing required fields');
    }
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
    console.log('User created:', user);
    return user; 
  }
};

app.post('/users', async (req, res) => {
  try {
    const user = req.body;
    // Input validation
    if (!user || !user.name || !user.email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const createdUser = await db.createUser(user);
    res.status(201).json(createdUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});