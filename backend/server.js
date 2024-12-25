// server.js (Backend using Express)

const express = require('express');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const app = express();
const port = 5000;

app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// Initialize an empty conversation history
let conversationHistory = [];

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  if (userMessage.trim()) {
    // Add user's message to the conversation history
    conversationHistory.push({ role: "user", content: userMessage });

    // Call OpenAI API with the conversation history for context awareness
    try {
      const response = await openai.createChatCompletion({
        model: "gpt-4",
        messages: conversationHistory,
      });

      const botReply = response.data.choices[0].message.content;

      // Add bot's reply to the conversation history
      conversationHistory.push({ role: "assistant", content: botReply });

      res.json({ response: botReply });

    } catch (error) {
      console.error("Error with OpenAI API: ", error);
      res.status(500).send("Error with API request.");
    }
  } else {
    res.status(400).send("Message is required.");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
