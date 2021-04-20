import {Message, Client} from 'discord.js';
import config from '../../bot-config';
import {Commands} from "../utils/commands";
import {parseCommand} from '../utils/parse-command';

export async function postNotice(message: Message) {
  const deserializedCommand = parseCommand(message.content);
  if (deserializedCommand && deserializedCommand.command === Commands.NOTICE) {
    await message.channel.send(deserializedCommand.commandContent);
  }
}

export function setup(client: Client) {
  client.on('message', msg => {
    void postNotice(msg);
  });
}
