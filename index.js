const Chatbot = require('./chatbot');
const SmartsheetsWebInterface = require('./smartsheetsWebInterface');

(async () => {
  const chatbot = new Chatbot();
  const smartsheetsInterface = new SmartsheetsWebInterface();

  try {
    await chatbot.createSession();
    // Main interaction logic between chatbot, user, and Smartsheets
    await chatbot.closeSession();
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
