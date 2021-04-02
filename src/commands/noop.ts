import {Message, Client} from 'discord.js';

export async function sayHi(message: Message) {
  if (/привет бот/i.test(message.content)) {
    await message.channel.send("Я Вас категорически приветствую!");
  }
}

export function setup(client: Client) {
  client.on('message', msg => {
    void sayHi(msg);
  });
}
