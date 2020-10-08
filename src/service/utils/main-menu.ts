import { Markup, Extra } from "telegraf";

export const mainMenuHelper = ctx => {
    ctx.scene.leave();
    return ctx.replyWithHTML(
        `<strong>Главное меню</strong>`,
        getMainKeyboard(ctx),
    );
};

export function getMainKeyboard(ctx: any) {
    return Extra.HTML().markup((m: Markup) =>
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
