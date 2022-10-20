import request from "./req";
import "./vars";

function getTracks() {
    const apiBaseUrl = "http://51.250.95.23:8000/catalog/track";

    request({
        url: `${apiBaseUrl}/all`,
        onSuccess: (data) => {
            window.application.tracks = data.results;
            
        },
        onError: () => {
            console.log("error");
        },
    });
}

export default getTracks;
