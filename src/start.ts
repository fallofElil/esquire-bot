import Discord from 'discord.js';
import {setup} from './setup';

export function start() {
  const client = new Discord.Client();

  void client.login(process.env.BOT_TOKEN);

  client.on('ready', () => {
    setup(client);
    console.log('Waiting your commands...');
  })
}
