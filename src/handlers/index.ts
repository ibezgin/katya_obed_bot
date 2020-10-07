import Telegraf from "telegraf";
import { TelegrafContext } from "telegraf/typings/context";
import { registerHelp } from "./help";

export async function registerHandlers(
    bot: Telegraf<TelegrafContext>,
): Promise<Telegraf<TelegrafContext>> {
    //start command handler
    await registerHelp(bot);


    return bot;
}