import PlayListTrack from "../PlayListTrack/PlayListTrack";
import { checkFavorites } from "../../../scripts/checkFavorites";

import * as S from "./styles";

export default function PlayListItem(props) {
    return (
        <S.PlayListItem>
            <PlayListTrack
                trackImageUrl="img/icon/sprite.svg#icon-note"
                trackTitleUrl=""
                trackTitle={props.track.name}
                trackAuthorUrl=""
                trackAuthorTitle={props.track.author}
                trackAlbumUrl=""
                trackAlbumTitle={props.track.album}
                isLike={checkFavorites(props.track)}
                trackTime={props.track.duration_in_seconds}
                id={props.track.id}
            />
        </S.PlayListItem>
    );
}
