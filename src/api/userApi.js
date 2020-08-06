import 'whatwg-fetch';

export function getUsers() {
    return getUsers('users');
}

function GET(url) {
    return fetch(url).then(onSucces, onError)
}

function onSucces(response) {
    return response.json();
}

function onError(error) {
    console.log(error); // eslint-disable-line no-console
}