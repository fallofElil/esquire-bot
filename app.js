"use strict";
var Discord = require('discord.js');
var config = require('./config.json');
var client = new Discord.Client();
client.login(config.BOT_TOKEN);
