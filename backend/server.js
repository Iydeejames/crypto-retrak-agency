const express = require('express');
const axios = require('axios');
require('dotenv').config();  // Load environment variables from .env file

const app = express();
const port = 5000;
  
// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to handle chat requests
app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: userMessage }],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.}`, // Use API key from .env
          'Content-Type': 'application/json',
        },
      }
    );

    const botMessage = response.data.choices[0].message.content;
    res.json({ message: botMessage });
  } catch (error) {
    console.error('Error communicating with OpenAI API:', error);
    res.status(500).send('Error connecting to AI API');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
