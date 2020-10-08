import moment from "moment";
import { Markup } from "telegraf";
import { mainMenuHelper } from "../../service/utils/main-menu";

const WizardScene = require("telegraf/scenes/wizard");

export const settingHoursMinutes = new WizardScene(
    "hours-minutes",
    async ctx => {
        const currentTime = moment().format("HH:mm");

        const feautureTime = moment(
            `${process.env.ALARM_HOUR}${process.env.ALARM_MINUTES}`,
            "HHmm",
        ).format("HH:mm");

        let getDate = string =>
            new Date(0, 0, 0, string.split(":")[0], string.split(":")[1]); //получение даты из строки (подставляются часы и минуты
        let different =
            Number(getDate(feautureTime)) - Number(getDate(currentTime));

        let hours = Math.floor((different % 86400000) / 3600000);
        let minutes = Math.round(((different % 86400000) % 3600000) / 60000);
        console.log(moment().format("HH:mm"));
        await ctx.replyWithHTML(
            `До оповещения осталось: <strong>${
                hours < 0 ? (minutes == 0 ? hours + 24 : hours + 25) : hours
            } часов ${minutes < 0 ? minutes + 60 : minutes} минут </strong>`,
            Markup.inlineKeyboard(
                [Markup.callbackButton("➡️ Next", "next")],
                {},
            ).extra(),
        );
        return ctx.wizard.next();
    },
    mainMenuHelper,
);
