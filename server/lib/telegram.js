'use strict';

const config = require('./config');
const TelegramBot = require('node-telegram-bot-api');

const token = config.telegram.token
const chatId = config.telegram.chatId

const telegramBot = new TelegramBot(token);

module.exports = {
  telegramBot,
  chatId
};
