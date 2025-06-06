const express = require('express');
const app = express();
const PORT = 3000;


// Middleware to parse JSON bodiesapp.use(express.json());
app.use(express.json());

// Sample route to handle GET requests
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


// Handle invalid routesapp.use((req, res) => {
app.use((req, res) => {
    res.status(404).send( message, 'Route not found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
