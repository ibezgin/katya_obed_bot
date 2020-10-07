import { getAllUsers } from "../../datasourse/controller";

export const fetchDataController = ctx => {
    return getAllUsers().then(value => {
        ctx.session.allUsers = value;
        return value;
    });
};
