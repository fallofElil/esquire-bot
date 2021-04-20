import config from '../../bot-config';

type DeserializedMessage = {
  command: string;
  commandContent: string;
}

export function parseCommand(msg: string): DeserializedMessage | null {
  const wordsArr = msg.split(' ');
  if (wordsArr.length >= 3 && wordsArr[0] === config.prefix) return {
    command: wordsArr[1],
    commandContent: msg.slice(`${wordsArr[0]} ${wordsArr[1]} `.length),
  };
  return null;
}
