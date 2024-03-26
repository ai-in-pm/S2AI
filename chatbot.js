const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

class Chatbot {
  constructor() {
    this.sessionId = null;
  }

  async initialize() {
    // Initialize a new chat session here
  }

  async sendMessage(message) {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: message }],
    });
    return response.data;
  }

  // Add more methods if needed
}

module.exports = Chatbot;