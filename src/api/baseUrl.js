/*export default function getBaseUrl() {
    return getQueryStringParamaterName('useMockApi') ? 'http://localhost/' : '/';
}

//getting paramaters using url
function getQueryStringParamaterName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "=([^&#]*)|&|#|$");
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}*/

export default function getBaseUrl() {
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://protected-fortress-12459.herokuapp.com/';
}


//Getting paramaters from URL
function getQueryStringParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}