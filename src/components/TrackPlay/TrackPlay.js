export default function TrackPlay(props) {
    return (
      <>
            <div className="track-play__image">
               <svg className="track-play__svg" alt="music">
                   <use xlinkHref={props.playTrackImageUrl} />
               </svg>
            </div>
            <div className="track-play__author">
               <a className="track-play__author-link" href={props.playTrackNameUrl}>
                {props.playTrackNameTitle}</a>
            </div>
            <div className="track-play__album">
              <a className="track-play__album-link" href={props.playTrackAuthorUrl}>
                {props.playTrackAuthorTitle}</a>
            </div> 
      </> 
                                                       
    );
}