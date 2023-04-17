export const checkFavorites = (tracks) => {
  
    const userName = document.cookie.split(";")[0].split("=")[1];

    const favoriteTracks = [tracks].filter((track) =>
        track.stared_user.find((elem) => elem.username === userName)
    );

    let isLike = false;

    favoriteTracks.forEach((elem) => {
        if (elem.id === tracks.id) {
            isLike = true;
        }
    });

    return isLike;
};
