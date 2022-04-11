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
            callback_data: "click1",},],
        [{
            text: "Deletar um usuário",
            callback_data: "click2",},],
        [{
            text: "Atualizar dados de um usuário",
            callback_data: "click3",},],
        [{
            text: "Quantidade de usuários online",
            callback_data: "click4",},],
        [{
            text: "Quantidade de usuários online",
            callback_data: "click5",},],
        [{
            text: "Acessar diretamente o painel",
            callback_data: "click6",
            url: `https://stackoverflow.com/questions/61467722/difference-between-npm-update-and-remove-package-lock-json-plus-npm-install`,},],
      ],
  
    },
    
  });
});

function teste (callback_data) {
  if (callback_data == "click3") {
    return console.log("tudo zuado")
  } else {
    return console.log("deu certo tbm, mas eu n cliquei")
  }
}

//colocar botao de atualizar dados de usuario, aí vira uma api rest/crud =)
bot.on('callback_query', (carro) => {
  const msg = carro.message;
  //criar uma variavel que guarda carro data e retornar ela. ai uso numa função?
  console.log(carro.data);
  if(carro.data == 'click1') {
    bot.answerCallbackQuery(carro.id)
      .then(() => bot.sendMessage(msg.chat.id, "Primeiro click deu certo!"));
  } else if (carro.data == 'click2') {
    bot.answerCallbackQuery(carro.id)
    .then(() => bot.sendMessage(msg.chat.id, "Segundo click deu certo!"));
  } else if (carro.data == 'click3') {
    bot.answerCallbackQuery(carro.id)
    .then(() => bot.sendMessage(msg.chat.id, "Terceiro click deu certo!"));
  } else if (carro.data == 'click4') {
    bot.answerCallbackQuery(carro.id)
    .then(() => bot.sendMessage(msg.chat.id, "Quarto click deu certo!"));
  } else if (carro.data == 'click5') {
    bot.answerCallbackQuery(carro.id)
    .then(() => bot.sendMessage(msg.chat.id, "Quinto click deu certo!"));
  } else if (carro.data == 'click6') {
    bot.answerCallbackQuery(carro.id)
    .then(() => bot.sendMessage(msg.chat.id, "Sexto click deu certo!"));
  } else {
    bot.answerCallbackQuery(carro.id)
    .then(() => bot.sendMessage(msg.chat.id, "Algum erro ocorreu!"));
  }
});

// bot.on('callback_query', (carro) => {
//   const msg = carro.message;
//   console.log(carro.data);
//   bot.answerCallbackQuery(carro.id)
//       .then(() => bot.sendMessage(msg.chat.id, "Deu certo seu commit!"));
// });