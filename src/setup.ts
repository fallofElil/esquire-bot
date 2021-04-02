import {Client} from 'discord.js';
import * as noop from './commands/noop'

export function setup(client: Client) {
  noop.setup(client);
}
