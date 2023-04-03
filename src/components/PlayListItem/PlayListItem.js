import PlayListTrack from "../PlayListTrack/PlayListTrack";
import { usePlayerContext } from "../../count-context";

import * as S from "./styles";

export default function PlayListItem(props) {
   
    const { togglePlayer } = usePlayerContext();

    return (
        <S.PlayListItem
            onClick={() => {
                togglePlayer();
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
                trackTime={props.track.durationInSeconds}
                id={props.track.id}
            />
        </S.PlayListItem>
    );
}
