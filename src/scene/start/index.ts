import { Markup } from "telegraf";
// import { COMMANDS } from "../../service/enum/commands";
import fs from "fs";
import { mainMenuHelper } from "../../service/utils/main-menu";
import { notificationController } from "../../service/controller/notification-controller";
// import { getMainKeyboard } from "../../service/utils/get-main-keyboard";

const WizardScene = require("telegraf/scenes/wizard");

export const startScene = new WizardScene(
    "start-scene",
    async ctx => {
        await ctx.replyWithHTML(
            `<strong>Здравствуй, дорогой(ая) ${ctx.chat.first_name}. Этот бот предназначен специально, что бы одна оооочень красивая девочка не забывала брать с собой обед.</strong>`,
            Markup.inlineKeyboard(
                [Markup.callbackButton("➡️ Next", "next")],
                {},
            ).extra(),
        );
        return ctx.wizard.next();
    },
    async ctx => {
        notificationController(ctx);
        await ctx.replyWithPhoto({
            source: fs.createReadStream("./src/assets/kate2.jpg"),
        });
        await ctx.reply(
            `Только посмотрите на эту красотку? Как тут не влюбиться?)`,
            Markup.inlineKeyboard(
                [Markup.callbackButton("➡️ Next", "next")],
                {},
            ).extra(),
        );
        return ctx.wizard.next();
    },
    mainMenuHelper,
);
