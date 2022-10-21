import PlayListTrack from "../PlayListTrack/PlayListTrack";

import * as S from "./styles";

export default function PlayListItem(props) {

    const togglePlayTrack = (event) => {
        event.preventDefault();
        window.application.trackPlay =
            window.application.tracks[props.trackNumber].track_file;
        console.log(window.application.tracks[props.trackNumber].track_file);
       
    };

    return (
        <S.PlayListItem onClick={togglePlayTrack}>
            <PlayListTrack
                trackImageUrl="img/icon/sprite.svg#icon-note"
                trackTitleUrl=""
                trackTitle={window.application.tracks[props.trackNumber].name}
                trackAuthorUrl=""
                trackAuthorTitle={
                    window.application.tracks[props.trackNumber].author
                }
                trackAlbumUrl=""
                trackAlbumTitle={
                    window.application.tracks[props.trackNumber].album
                }
                iconLikeUrl="img/icon/sprite.svg#icon-like"
                trackTime={
                    window.application.tracks[props.trackNumber]
                        .duration_in_seconds
                }
            />
        </S.PlayListItem>
    );
}
