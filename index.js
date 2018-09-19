var TelegramBot = require('node-telegram-bot-api');

var token='680607774:AAH_ltxjmZrxjEXn-eaw-lx9NZH4eYuRcDY';
var bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, 'yo!!',{
        reply_markup: {
            keyboard: [['Hello'],
        ['Bye-bye']]
        }
    });
});