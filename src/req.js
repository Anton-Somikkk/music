const noop = () => { };
const NO_HEADERS = {};

export default function request({

    method = 'GET',
    url,
    headers = NO_HEADERS,
    body,
    type = 'json',
    onSuccess = noop,
    onError = noop,

}) {
    const req = new XMLHttpRequest();

    req.open(method, url);

    Object.keys(headers).forEach((key) => {
        req.setRequestHeader(key, headers[key]);
    });

    req.responseType = type;

    req.onload = function (event) {
        const { target } = event;

        if (target.status !== 200 && target.status !== 201) {

            onError(target.statusText);
            return;
        }
        onSuccess(target.response);
    }

    req.onerror = function () {
        onError();
    }

    req.send(body);
}