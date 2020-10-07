import Telegraf from "telegraf";
import { TelegrafContext } from "telegraf/typings/context";
// import { fetchDataController } from "../../service/controller/fetch-data-controller";
import { COMMANDS } from "../../service/enum/commands";

export async function registerHelp(bot: Telegraf<TelegrafContext>) {
    bot.command(COMMANDS.HELP, printHelpCommand);
}

async function printHelpCommand(ctx: TelegrafContext) {
    console.log(ctx.chat);
    ctx.replyWithHTML(`
    <b>CHAT_ID: ${ctx.chat.id}</b>
    <b>USERNAME: ${ctx.chat.username}</b>
    <b>FIRST_NAME: ${ctx.chat.first_name}</b>
    <b>LAST_NAME: ${ctx.chat.last_name}</b>
    <b>TYPE: ${ctx.chat.type}</b>
        `);
    ctx.reply(
        `Для получения дополнительной информации обратитесь к администратору`,
    );
}
