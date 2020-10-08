import Telegraf from "telegraf";
import { TelegrafContext } from "telegraf/typings/context";
import { COMMANDS } from "../../service/enum/commands";
import { mainMenuHelper } from "../../service/utils/main-menu";

export async function registerMainMenu(bot: Telegraf<TelegrafContext>) {
    bot.command(COMMANDS.MAIN_MENU, await printHelpCommand);
}

async function printHelpCommand(ctx: TelegrafContext) {
    ctx.reply(await mainMenuHelper(ctx));
}
