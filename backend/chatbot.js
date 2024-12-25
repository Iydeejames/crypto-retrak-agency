const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Make sure you have your API key in the .env file
});

const openai = new OpenAIApi(configuration);

async function askChatbot(question) {
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: question }],
  });
  return response.data.choices[0].message.content; // Extract the bot's response
}

module.exports = { askChatbot };
