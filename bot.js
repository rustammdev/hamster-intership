import { Bot } from "grammy";
import "dotenv/config";
import { InlineKeyboard } from "grammy";

const bot = new Bot(`${process.env.BOT_TOKEN}`);

bot.command("start", (ctx) => {
  const keyboard = new InlineKeyboard().url(
    "Open Web App",
    "https://t.me/hamsterYoshlarIshlari_bot/app"
  );

  ctx.reply("Quyidagi tugmani bosing orqali web appni ochishingiz mumkin.", {
    reply_markup: keyboard,
  });
});

bot.on("message", (ctx) => ctx.reply("Got another message!"));

bot.start();
