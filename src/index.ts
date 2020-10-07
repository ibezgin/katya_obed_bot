import Telegraf, { Stage, Context } from "telegraf";
import * as dotenv from "dotenv";
import { registerHandlers } from "./handlers";
import { SceneContextMessageUpdate } from "../node_modules/telegraf/typings/stage.d";
import { startScene } from "./scene/start";
import { settingTime } from "./scene/setting-time";
import { getOrCreateConnection } from "./datasourse";
import { addNewsBotUser } from "./datasourse/controller";
import { notificationController } from "./service/controller/notification-controller";
import { web } from "./web";
import { settingHoursMinutes } from "./scene/hours-minutes";
const session = require("telegraf/session");

dotenv.config({ path: __dirname + "/../.env" });

export type BaseBotContext = Context & SceneContextMessageUpdate;

interface BotContext extends BaseBotContext {
    session: any;
}

const main = async () => {
    getOrCreateConnection();

    const bot = new Telegraf<BotContext>(process.env.BOT_TOKEN as any);

    await registerHandlers(bot);

    const stage = await new Stage([startScene, settingTime, settingHoursMinutes], {});

    stage.register(startScene);

    stage.start(ctx => {
        addNewsBotUser(ctx);
        ctx.scene.enter("start-scene");
        notificationController(ctx);
    });

    stage.action("setting-time", ctx => ctx.scene.enter("setting-time"));

    stage.action("hours-minutes", ctx => ctx.scene.enter("hours-minutes"));

    bot.use(session());

    bot.use(stage.middleware());

    bot.launch();

    web(bot);
    // require("./web")(bot);
};

main();
