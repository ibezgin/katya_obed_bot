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

    // setInterval(async () => {
    //     const currenctTime = moment().format("HH:mm");

    //     if (currenctTime === featureTime) {
    //         const data: any[] = await fetchDataController(ctx);

    //         const chatIds = await data.map(elem => elem?.chat_id);

    //         const userIds = await chatIds?.filter((elem, index, self) => {
    //             return self.indexOf(elem) === index;
    //         });

    //         for (const id of userIds) {
    //             await ctx.telegram.sendMessage(
    //                 Number(id),
    //                 "Катенька обед не забыла?",
    //             );
    //         }
    //     }
    // }, 540000);
};
