import { bot } from "./bot/bot.js";
import { start } from "./server/server.js";

const bootstrap = async () => {
  bot.start();
  await start();
};

bootstrap();
