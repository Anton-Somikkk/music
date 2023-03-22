import PlayListTrack from "../PlayListTrack/PlayListTrack";
import { usePlayerContext } from "../../count-context";

import * as S from "./styles";

export default function PlayListItem(props) {
    const { togglePlayer } = usePlayerContext();

    // const togglePlayTrack = () => {
    //     window.application.trackPlayUrl =
    //         window.application.tracks[props.trackNumber].track_file;
    //     window.application.trackPlayName =
    //         window.application.tracks[props.trackNumber].name;
    //     window.application.trackPlayAuthor =
    //         window.application.tracks[props.trackNumber].author;
    // };

    return (
        <S.PlayListItem
            onClick={() => {
                togglePlayer();
                // togglePlayTrack();
            }}
        >
            <PlayListTrack
                trackImageUrl="img/icon/sprite.svg#icon-note"
                trackTitleUrl=""
                trackTitle={props.track.name}
                trackAuthorUrl=""
                trackAuthorTitle={props.track.author}
                trackAlbumUrl=""
                trackAlbumTitle={props.track.album}
                iconLikeUrl="img/icon/sprite.svg#icon-like"
                trackTime={props.track.duration_in_seconds}
            />
        </S.PlayListItem>
    );
}
