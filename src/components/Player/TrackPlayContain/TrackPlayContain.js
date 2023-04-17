import { useSelector } from "react-redux";
import TrackPlay from "../TrackPlay/TrackPlay";
import { useGetTrackByIdQuery } from "../../../services/musicApi";
import * as S from "./styles";

export default function TrackPlayContain() {
    const trackId = useSelector((state) => state.player.id);
    const { data, isLoading, isSuccess } = useGetTrackByIdQuery(trackId);

    return (
        <S.TrackPlayContain>
            {isLoading && (
                <img
                    src="../img/Skeleton-track-2.png"
                    aria-label="Загрузка трека"
                />
            )}
            {isSuccess && (
                <TrackPlay
                    playTrackImageUrl="img/icon/sprite.svg#icon-note"
                    playTrackNameUrl={data.track_file}
                    playTrackNameTitle={data.name}
                    playTrackAuthorUrl={data.track_file}
                    playTrackAuthorTitle={data.author}
                />
            )}
        </S.TrackPlayContain>
    );
}
