import { Markup, Extra } from "telegraf";

export const mainMenuHelper = async ctx => {
    ctx.scene.leave();
    return await ctx.replyWithHTML(
        `<strong>Главное меню</strong>`,
        getMainKeyboard(ctx),
    );
};

export async function getMainKeyboard(ctx: any) {
    return await Extra.HTML().markup((m: Markup) =>
        m.inlineKeyboard(
            [
                m.callbackButton("Установить время", "setting-time"),
                m.callbackButton("Сколько до напоминания?", "hours-minutes"),
                // m.callbackButton(
                //     "Че там по covid 19?",
                //     JSON.stringify({ a: "accountSummary" }),
                //     false,
                // ),
            ],
            {},
        ),
    );
}
