const express = require('express');
const app = express();
const userRoutes = require('./routes/users'); // ✅ make sure this path is correct

app.use(express.json()); // ✅ middleware to parse JSON
app.use('/api/users', userRoutes); // ✅ use the router

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
