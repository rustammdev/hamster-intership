import { Bot } from "grammy";
import "dotenv/config";
import { InlineKeyboard } from "grammy";
import axios from "axios";

export const bot = new Bot(`${process.env.BOT_TOKEN}`);

bot.command("start", (ctx) => {
  const keyboard = new InlineKeyboard().webApp(
    "Open to web app",
    "https://google.com"
  );
  const { id, first_name, last_name, username } = ctx.message.from;

  // databazaga malumotlarni jo'natish
  try {
    axios
      .post("http://localhost:7000/api", ctx.message.from)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.error(error.message);
  }

  ctx.reply(
    "Quyidagi tugmani bosish orqali web appni ochishingiz mumkin.", { reply_markup: keyboard }
  );
});

bot.on("message", (ctx) => ctx.reply("Got another message!"));
