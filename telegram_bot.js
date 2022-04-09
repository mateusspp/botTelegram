const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = 'ff';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);

});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Escolha uma das opções abaixo:", {
    "reply_markup": {
      "inline_keyboard": [
        [
          {
            text: "Criar um usuário",
            callback_data: "click",
          },
        ],
        [
          {
            text: "Deletar um usuário",
            callback_data: "click2",
          },
        ],
        [
          {
            text: "Quantidade total de usuários",
            callback_data: "click3",
          },
        ],
        [
          {
            text: "Quantidade de usuários online",
            callback_data: "click4",
          },
        ],
        [
          {
            text: "Acessar diretamente o painel",
            callback_data: "click5",
            url: `https://stackoverflow.com/questions/61467722/difference-between-npm-update-and-remove-package-lock-json-plus-npm-install`,
          },
        ],
      ],
      
    },
    
  });
});