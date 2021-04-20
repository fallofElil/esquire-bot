import {Client} from 'discord.js';
import * as noop from './commands/noop';
import * as postNotice from './commands/notice';

export function setup(client: Client) {
  noop.setup(client);
  postNotice.setup(client);
}
