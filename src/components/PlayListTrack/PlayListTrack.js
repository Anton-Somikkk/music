export default function PlayListTrack(props) {

    return (
      <div className="playlist__track track">
            <div className="track__title">
                <div className="track__title-image">
                    <svg className="track__title-svg" alt="music">
                        <use xlinkHref={props.trackImageUrl} />
                    </svg>
                </div>
                <div className="track__title-text">
                    <a className="track__title-link" href={props.trackTitleUrl}>{props.trackTitle} <span className="track__title-span" /></a>
                </div>
            </div>
            <div className="track__author">
                <a className="track__author-link" href={props.trackAuthorUrl}>{props.trackAuthorTitle}</a>
            </div>
            <div className="track__album">
                <a className="track__album-link" href={props.trackAlbumUrl}>{props.trackAlbumTitle}</a>
            </div>
            <div className="track__time">
                <svg className="track__time-svg" alt="time">
                    <use xlinkHref={props.iconLikeUrl} />
                </svg>
                <span className="track__time-text">{props.trackTime}</span>
            </div>
        </div>
    );
  }