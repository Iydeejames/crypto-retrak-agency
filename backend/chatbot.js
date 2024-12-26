const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // API key in the .env file
});

const openai = new OpenAIApi(configuration);

async function askChatbot(question) {
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: question }],
  });
  return response.data.choices[0].message.content; // Extracts the bot's response
}

module.exports = { askChatbot };
