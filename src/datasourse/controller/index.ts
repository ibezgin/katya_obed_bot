import { SceneContextMessageUpdate } from "telegraf/typings/stage";
import { getMongoManager } from "typeorm";
import { BotUsersEntity } from "../entity/bot-users";

export const addNewsBotUser = async (ctx: SceneContextMessageUpdate) => {
    const manager = getMongoManager();

    const user = new BotUsersEntity(
        ctx?.chat?.id,
        ctx?.chat?.username,
        ctx?.chat?.first_name,
    );

    await manager.save(user);
};

export const getAllUsers = async () => {
    const manager = getMongoManager();

    const result = await manager.find("bot_users");

    return result;
};
