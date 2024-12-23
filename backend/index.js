// Load environment variables from the .env file
require('dotenv').config();

// Import required modules
const express = require('express');

// Create an Express app
const app = express();

// Access your API key from environment variables
const apiKey = process.env.API_KEY;

// Log the API key for debugging purposes (remove this in production)
console.log('API Key Loaded:', apiKey);

// Define a basic route
app.get('/', (req, res) => {
    res.send(`Your API Key is securely loaded: ${apiKey ? 'Yes' : 'No'}`);
});

// Define a port to listen on
const PORT = process.env.PORT || 3000; // Use the environment's PORT variable or default to 3000

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
