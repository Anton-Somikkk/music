import * as S from "./styles";

export default function TrackPlay(props) {
    return (
      <>
            <S.TrackPlayImage>
               <S.TrackPlaySvg alt="music">
                   <use xlinkHref={props.playTrackImageUrl} />
               </S.TrackPlaySvg>
            </S.TrackPlayImage>
            <S.TrackPlayAuthor>
               <S.TrackPlayAuthorLink href={props.playTrackNameUrl}>
                {props.playTrackNameTitle}</S.TrackPlayAuthorLink>
            </S.TrackPlayAuthor>
            <S.TrackPlayAlbum>
              <S.TrackPlayAlbumLink href={props.playTrackAuthorUrl}>
                {props.playTrackAuthorTitle}</S.TrackPlayAlbumLink>
            </S.TrackPlayAlbum> 
      </> 
                                                       
    );
}