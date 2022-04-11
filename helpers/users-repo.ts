/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 09:42:43 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

// users in JSON file for simplicity, store in a db for production applications
const users = require("../data/users.json");

export const usersRepo = {
    getAll: () => users,
    find: (x: any) => users.find(x),
};
