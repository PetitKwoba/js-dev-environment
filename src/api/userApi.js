import 'whatwg-fetch';
import getBaseUrl from './baseUrl'; //importing base Url

const baseUrl = getBaseUrl();

export function getUsers() {
    return get('users');
}
//this cetralied API proxy abstracts away http API
function get(url) {
    return fetch(baseUrl + '/' + url).then(onSucces, onError) //baseUrladded
}

function onSucces(response) {
    return response.json();
}

function onError(error) {
    console.log(error); // eslint-disable-line no-console
}