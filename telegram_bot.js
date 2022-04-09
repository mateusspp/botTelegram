const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Escolha uma das opções abaixo:", {
    "reply_markup": {
      "inline_keyboard": [
        [{
            text: "Criar um usuário",
            callback_data: "teste azul",},],
        [{
            text: "Deletar um usuário",
            callback_data: "click2",},],
        [{
            text: "Quantidade total de usuários",
            callback_data: "click3",},],
        [{
            text: "Quantidade de usuários online",
            callback_data: "click4",},],
        [{
            text: "Acessar diretamente o painel",
            callback_data: "click5",
            url: `https://stackoverflow.com/questions/61467722/difference-between-npm-update-and-remove-package-lock-json-plus-npm-install`,},],
      ],
  
    },
    
  });
});

bot.on('callback_query', (carro) => {
  const msg = carro.message;
  bot.answerCallbackQuery(carro.id)
      .then(() => bot.sendMessage(msg.chat.id, "Deu certo seu commit!"));
});