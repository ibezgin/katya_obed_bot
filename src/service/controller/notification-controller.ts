import moment from "moment";
import { fetchDataController } from "./fetch-data-controller";

export const notificationController = async ctx => {
    const featureTime = moment(process.env.ALARM_TIME, "hmm").format("HH:mm");

    setInterval(async () => {
        const currenctTime = moment().format("HH:mm");

        if (currenctTime === featureTime) {
            const data: any[] = await fetchDataController(ctx);

            const chatIds = data.map(elem => elem?.chat_id);

            const userIds = chatIds?.filter((elem, index, self) => {
                return self.indexOf(elem) === index;
            });

            for (const id of userIds) {
                await ctx.telegram.sendMessage(
                    Number(id),
                    "Катенька обед не забыла?",
                );
            }
        }
    }, 540000);
};
