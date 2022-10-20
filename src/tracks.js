import request from "./req";


window.application = {
    tracks: [],
};

function getTracks() {
    const apiBaseUrl = "http://51.250.95.23:8000/catalog/track";

    request({
        url: `${apiBaseUrl}/all`,
        onSuccess: (data) => {
            window.application.tracks = data.results;
        },
        onError: (statusText) => {
            console.log(statusText);
        },
    });
}

export default getTracks;
