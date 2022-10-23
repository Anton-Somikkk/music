import PlayListTrack from "../PlayListTrack/PlayListTrack";
import { usePlayerContext } from "../../count-context";

import * as S from "./styles";

export default function PlayListItem(props) {
    const { togglePlayer } = usePlayerContext();

    const togglePlayTrack = () => {
        window.application.trackPlayUrl =
            window.application.tracks[props.trackNumber].track_file;
        window.application.trackPlayName =
            window.application.tracks[props.trackNumber].name;
        window.application.trackPlayAuthor =
            window.application.tracks[props.trackNumber].author;
    };

    return (
        <S.PlayListItem
            onClick={() => {
                togglePlayer();
                togglePlayTrack();
            }}
        >
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
