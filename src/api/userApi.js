/*import 'whatwg-fetch';
import getBaseUrl from './baseUrl'; //importing base Url

const baseUrl = getBaseUrl();

export function getUsers() {
    return get('users');
}

export function deleteUser(id) { //public fuction to deletes user and parse the id it recieves
    return del(`users/${id}`);
}

//this cetralied API proxy abstracts away http API
function get(url) {
    return fetch(baseUrl + '/' + url).then(onSucces, onError); //baseUrladded
}

// can't call fuction delete since reserverd word
function del(url) {
    const request = new Request(baseUrl + '/' + url, {
        method: 'DELETE'
    });

    return del.fetch(request).then(onSucces, onError);
}

function onSucces(response) {
    return response.json();
}

function onError(error) {
    console.log(error); // eslint-disable-line no-console
}*/

import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
    return get('users');
}

export function deleteUser(id) {
    return del(`users/${id}`);
}

function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}

// Can't call func delete since reserved word.
function del(url) {
    const request = new Request(baseUrl + url, {
        method: 'DELETE'
    });

    return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error); // eslint-disable-line no-console
}