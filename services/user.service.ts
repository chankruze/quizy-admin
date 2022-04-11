/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 09:11:55 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";

import { fetchWrapper } from "../helpers/fetch-wrapper";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const userSubject = new BehaviorSubject(
    process.browser && JSON.parse(localStorage.getItem("user") as string),
);

function login(email: string, password: string) {
    return fetchWrapper
        .post(`${baseUrl}/authenticate`, { email, password })
        .then((user) => {
            user = JSON.parse(user);
            // publish user with basic auth credentials to subscribers and store in
            // local storage to stay logged in between page refreshes
            user.authdata = window.btoa(email + ":" + password);
            userSubject.next(user);
            localStorage.setItem("user", JSON.stringify(user));
            return user;
        });
}

function logout() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem("user");
    userSubject.next(null);
    Router.push("/login");
}

function getAll() {
    return fetchWrapper.get(baseUrl);
}

export const userService = {
    user: userSubject.asObservable(),
    get userValue() {
        return userSubject.value;
    },
    login,
    logout,
    getAll,
};
