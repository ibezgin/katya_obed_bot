import Axios from "axios";
// import Axios from "axios";

import moment from "moment";
import { mainMenuHelper } from "../../service/utils/main-menu";

const Scene = require("telegraf/scenes/base");

export const covid = new Scene("covid");

covid.enter(async ctx => {
    await ctx.reply("Информация по covid-19");
    await ctx.reply("Введите страну (english)");
});
covid.on("message", async ctx => {
    const date = new Date();

    date.setDate(date.getDate() - 1);

    const from = moment(date, moment.ISO_8601).format("YYYY-MM-DDT00:00:00");

    const to = moment(new Date(), moment.ISO_8601).format(
        "YYYY-MM-DDT00:00:00",
    );

    const data = Axios.get(
        `https://api.covid19api.com/country/${ctx.message.text}/status/confirmed?from=${from}Z&to=${to}Z`,
    );

    data.then(value => {
        if (value.status === 200) {
            const result = value.data[0];
            ctx.reply(
                `Количество зараженных в ${result.CountryCode} на сегодняшний день: ${result.Cases}`,
            );
            mainMenuHelper(ctx);
        }
    }).catch(err => {
        console.log();
        if (err.response.status === 404) {
            ctx.reply("Данные не найдены");
            mainMenuHelper(ctx);
        }
    });
});
