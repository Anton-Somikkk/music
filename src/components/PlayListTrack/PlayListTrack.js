import * as S from "./styles";

export default function PlayListTrack(props) {

    return (
      <S.PlayListTrack>
            <S.TrackTitle>
                <S.TrackTitleImage>
                    <S.TrackTitleSvg alt="music">
                        <use xlinkHref={props.trackImageUrl} />
                    </S.TrackTitleSvg>
                </S.TrackTitleImage>
                <S.TrackTitleText>
                    <S.TrackTitleLink href={props.trackTitleUrl}>
                        {props.trackTitle} <S.TrackTitleSpan />
                        </S.TrackTitleLink>
                </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
                <S.TrackAuthorLink href={props.trackAuthorUrl}>{props.trackAuthorTitle}
                </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
                <S.TrackAlbumLink href={props.trackAlbumUrl}>{props.trackAlbumTitle}
                </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
                <S.TrackTimeSvg alt="time">
                    <use xlinkHref={props.iconLikeUrl} />
                </S.TrackTimeSvg>
                <S.TrackTimeText>{props.trackTime}</S.TrackTimeText>
            </S.TrackTime>
        </S.PlayListTrack>
    );
  }