// import moment from "moment";
// import { fetchDataController } from "./fetch-data-controller";
// import { CronJob } from "cron";
var CronJob = require("cron").CronJob;

export const notificationController = ctx => {
    var job = new CronJob(
        `${process.env.ALARM_HOUR} ${process.env.ALARM_MINUTE} * * *`,
        async function () {
            await ctx?.telegram?.sendMessage(
                Number(1111490838),
                "Катенька обед не забыла?",
            );
        },
        null,
        true,
        "Europe/Moscow",
    );
    job.start();

    var job2 = new CronJob(
        `${process.env.ALARM_HOUR} ${
            Number(process.env.ALARM_MINUTE) + 5
        } * * *`,
        async function () {
            await ctx?.telegram?.sendMessage(
                Number(1111490838),
                "Катенька обед не забыла?",
            );
        },
        null,
        true,
        "Europe/Moscow",
    );
    job2.start();
};
