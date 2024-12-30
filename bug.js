const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing validation of user data
  db.createUser(user); // Assume db.createUser is an asynchronous function
  res.status(201).send();
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});