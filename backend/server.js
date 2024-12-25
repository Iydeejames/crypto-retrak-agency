const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import cors

const app = express();

// Enable CORS with specific settings
app.use(cors({
  origin: 'http://localhost:3000',  // Allow requests from your React frontend's port (adjust if needed)
  methods: ['GET', 'POST'],        // Allowed methods
  allowedHeaders: ['Content-Type'], // Allowed headers
}));

app.use(bodyParser.json());

// Read training data from JSONL file
const trainingData = fs.readFileSync('./backend/training_data.jsonl', 'utf8')
  .split('\n')
  .filter(Boolean)
  .map(JSON.parse);

// Endpoint to get bot response
app.post('/api/get-response', (req, res) => {
  const { userMessage } = req.body;

  // Find a matching response from the training data
  const response = trainingData.find(data =>
    userMessage.toLowerCase().includes(data.input.toLowerCase())
  );

  if (response) {
    res.json({ botResponse: response.output });
  } else {
    res.json({ botResponse: "I'm sorry, I didn't understand that." });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
