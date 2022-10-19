
import PlayListTrack from "../PlayListTrack/PlayListTrack";
import * as S from "./styles";

export default function PlayListItem(props) {
    return (
        <S.PlayListItem>
            <PlayListTrack
                trackImageUrl="img/icon/sprite.svg#icon-note"
                trackTitleUrl={window.application.tracks[props.trackNumber].track_file}
                trackTitle={window.application.tracks[props.trackNumber].name}
                trackAuthorUrl={window.application.tracks[props.trackNumber].track_file}
                trackAuthorTitle={window.application.tracks[props.trackNumber].author}
                trackAlbumUrl={window.application.tracks[props.trackNumber].track_file}
                trackAlbumTitle={window.application.tracks[props.trackNumber].album}
                iconLikeUrl="img/icon/sprite.svg#icon-like"
                trackTime={window.application.tracks[props.trackNumber].duration_in_seconds}
            />
        </S.PlayListItem>
    );
}
