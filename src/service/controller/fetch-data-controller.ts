import { getAllUsers } from "../../datasourse/controller";

export const fetchDataController = async ctx => {
    return await getAllUsers();
};
