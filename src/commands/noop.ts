import {Message, Client} from 'discord.js';
import config from '../../bot-config';

export async function sayHi(message: Message) {
  const regex = new RegExp(`${config.prefix} привет бот`, 'i');
  if (regex.test(message.content)) {
    await message.channel.send("Я Вас категорически приветствую!");
  }
}

export function setup(client: Client) {
  client.on('message', msg => {
    void sayHi(msg);
  });
}
