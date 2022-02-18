// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { join } from 'path';
import { SlashCreator } from 'slash-create';
import ServerBase from '../../util/ServerBase'

export const creator = new SlashCreator({
  applicationID: process.env.DISCORD_APP_ID,
  publicKey: process.env.DISCORD_PUBLIC_KEY,
  token: process.env.DISCORD_BOT_TOKEN,
});

creator.withServer(new ServerBase()).registerCommandsIn(join(__dirname, '../../../..', 'commands'));

creator.on('warn', (message) => console.warn(message));
creator.on('error', (error) => console.error(error));
creator.on('commandRun', (command, _, ctx) =>
  console.info(`${ctx.user.username}#${ctx.user.discriminator} (${ctx.user.id}) ran command ${command.commandName}`)
);
creator.on('commandError', (command, error) => console.error(`Command ${command.commandName}:`, error));

export default creator.server.nextEndpoint;
