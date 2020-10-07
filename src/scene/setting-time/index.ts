import { Markup } from "telegraf";
import { mainMenuHelper } from "../../service/utils/main-menu";
import fs from "fs";

const WizardScene = require("telegraf/scenes/wizard");

export const settingTime = new WizardScene(
    "setting-time",
    async ctx => {
        await ctx.replyWithHTML(
            `<strong>Обманчик, я пока еще не придумал, как сделать, что бы можно было менять время)))</strong>`,
            Markup.inlineKeyboard(
                [Markup.callbackButton("➡️ Next", "next")],
                {},
            ).extra(),
        );
        return ctx.wizard.next();
    },
    async ctx => {
        await ctx.replyWithPhoto({
            source: fs.createReadStream("./src/assets/fuck.jpg"),
        });
        await ctx.reply(
            `А пока что... факушки)))`,
            Markup.inlineKeyboard(
                [Markup.callbackButton("➡️ Next", "next")],
                {},
            ).extra(),
        );
        return ctx.wizard.next();
    },
    mainMenuHelper,
);
