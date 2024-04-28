import { dbData, saveData } from '../data/data.js';

function addUser({ username, password }) {
    const id = dbData.users.length + 1;

    const user = {
        id,
        username,
        password,
    };

    dbData.users.push(user);
    saveData();

    return id;
}

function getAll() {
    return dbData.users;
}

export const users = {
    addUser,
    getAll,
};
