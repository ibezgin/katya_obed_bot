import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity({ name: "bot_users" })
export class BotUsersEntity {
    @ObjectIdColumn()
    public _id: ObjectID;

    @Column()
    public chat_id?: number;

    @Column()
    public first_name: string;

    @Column()
    public username: string;

    @Column()
    public lastname?: string;
    constructor(chat_id: number, username: string, first_name: string) {
        this.chat_id = chat_id;
        this.username = username;
        this.first_name = first_name;
    }
}
