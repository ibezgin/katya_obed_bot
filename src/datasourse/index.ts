import { createConnection } from "typeorm";
// import { BotUsersEntity } from "./entity/bot-users";

// const connectionManager = new ConnectionManager();

let connection: ReturnType<typeof createConnection> | undefined;

export const getOrCreateConnection = () => {
    if (!connection) {
        connection = createConnection({
            url: process.env.CONNECTION_STRING,
            type: "mongodb",
            useNewUrlParser: true,
            // reconnectTries: Number.MAX_VALUE,
            entities: [__dirname + "/entity/*.js"],
            synchronize: true,
            useUnifiedTopology: true,
        });
    }
    // console.log(connection);
    return connection;
};
