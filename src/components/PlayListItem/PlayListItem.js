import tracks from '../../tracks';
import PlayListTrack from '../PlayListTrack/PlayListTrack';

export default function PlayListItem(props) {  

    return (
      <div className="playlist__item">
        <PlayListTrack trackImageUrl={tracks[props.trackNumber].trackImageUrl}
         trackTitleUrl={tracks[props.trackNumber].trackTitleUrl} 
        trackTitle={tracks[props.trackNumber].trackTitle}
         trackAuthorUrl={tracks[props.trackNumber].trackAuthorUrl}
          trackAuthorTitle={tracks[props.trackNumber].trackAuthorTitle} 
        trackAlbumUrl={tracks[props.trackNumber].trackAlbumUrl}
         trackAlbumTitle={tracks[props.trackNumber].trackAlbumTitle} 
        iconLikeUrl={tracks[props.trackNumber].iconLikeUrl}
         trackTime={tracks[props.trackNumber].trackTime} />
      </div>
    ); 
  }