import tracks from './tracks';

function Wrapper() {

  return (
          <div className="wrapper">
            <div className="container">
                  <main className="main">
                  <MainLeftBar logoUrl="img/logo.png" />
                  <CentralBlock searchImageUrl="img/icon/sprite.svg#icon-search" />
                  <MainSidebarRight />
                  </main>
                  <PlayerBlock playerIconPrevUrl="img/icon/sprite.svg#icon-prev" 
                               playerIconPlayUrl="img/icon/sprite.svg#icon-play" 
                               playerIconNextUrl="img/icon/sprite.svg#icon-next"
                               playerIconRepeatUrl="img/icon/sprite.svg#icon-repeat"
                               playerIconShuffleUrl="img/icon/sprite.svg#icon-shuffle"
                               playerIconLikeUrl="img/icon/sprite.svg#icon-like"
                               playerIconDislikeUrl="img/icon/sprite.svg#icon-dislike"
                               playerIconVolumeUrl="img/icon/sprite.svg#icon-volume" />
            </div>
          </div>
  );
}

function MainLeftBar(props) {
  return (
              <nav className="main__nav nav">
                    <div className="nav__logo logo">
                        <img className="logo__image" src={props.logoUrl} alt="logo" />
                    </div>

                    <div className="nav__burger burger">
                        <span className="burger__line" />
                        <span className="burger__line" />
                        <span className="burger__line" />
                    </div>
                    <MainLeftBarMenu menuItemMainUrl="http://" menuItemPlayListUrl="http://" menuItemEnterUrl="http://" />
              </nav>
  );
}

function MainLeftBarMenu(props) {
  return (
              <div className="nav__menu menu">
                    <ul className="menu__list">
                        <li className="menu__item"><a href={props.menuItemMainUrl} className="menu__link">Главное</a></li>
                        <li className="menu__item"><a href={props.menuItemListUrl} className="menu__link">Мой плейлист</a></li>
                        <li className="menu__item"><a href={props.menuItemMainUrl} className="menu__link">Войти</a></li>
                    </ul>
              </div>
  );
  
}

function CentralBlock(props) {
  return (
                <div className="main__centerblock centerblock">
                    <div className="centerblock__search search">
                        <svg className="search__svg">
                            <use xlinkHref={props.searchImageUrl} />
                        </svg>
                        <input className="search__text" type="search" placeholder="Поиск" name="search" />
                    </div>
                      <CentralBlockTitle title="Треки" />
                      <CentralBlockFilter />
                      <CentralBlockContent iconWatchUrl="img/icon/sprite.svg#icon-watch" />
                      <CentralBlockPlayList />
                </div>
  );
}

function CentralBlockTitle(props) {
  return (
          <h2 className="centerblock__h2">{props.title}</h2>
  );
  
}

function CentralBlockFilter() {
  return (
      <div className="centerblock__filter filter">
          <div className="filter__title">Искать по:</div>
          <div className="filter__button button-author _btn-text">исполнителю</div>
          <div className="filter__button button-year _btn-text">году выпуска</div>
          <div className="filter__button button-genre _btn-text">жанру</div>
      </div>
  );
  
}

function CentralBlockContent(props) {
  return (
    <div className="centerblock__content">
        <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
                <svg className="playlist-title__svg" alt="time">
                    <use xlinkHref={props.iconWatchUrl} />
                </svg>
            </div>
        </div>
    </div>
  );
  
}

function CentralBlockPlayList() {
 
  return (
    <div className="content__playlist playlist">
        <PlayListItem trackNumber="0" />
        <PlayListItem trackNumber="1" />
        <PlayListItem trackNumber="2" />
        <PlayListItem trackNumber="3" />
        <PlayListItem trackNumber="4" />
        <PlayListItem trackNumber="5" />
        <PlayListItem trackNumber="6" />
        <PlayListItem trackNumber="7" />
        <PlayListItem trackNumber="8" />
        <PlayListItem trackNumber="9" />
        <PlayListItem trackNumber="10" />
    </div>
  ); 
}

function PlayListItem(props) {  
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

function PlayListTrack(props) {
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

function MainSidebarRight() {
  return (
    <div className="main__sidebar sidebar">
      <SidebarPerson personName="Sergey.Ivanov" />
      <SidebarBlock />
    </div>
  );
}

function SidebarPerson(props) {
  return (
          <div className="sidebar__personal">
            <p className="sidebar__personal-name">{props.personName}</p>
              <div className="sidebar__avatar" />
            
          </div>
  );
}

function SidebarBlock() {
  return (
          <div className="sidebar__block">
              <div className="sidebar__list">
                <SidebarItem sidebarItemUrl="#" sidebarItemImageUrl="img/playlist01.png" sidebarItemImageAlt="day's playlist" />
                <SidebarItem sidebarItemUrl="#" sidebarItemImageUrl="img/playlist02.png" sidebarItemImageAlt="day's playlist" />
                <SidebarItem sidebarItemUrl="#" sidebarItemImageUrl="img/playlist03.png" sidebarItemImageAlt="day's playlist" />
              </div>
          </div>
  );
}

function SidebarItem(props) {
  return (
        <div className="sidebar__item">
              <a className="sidebar__link" href={props.sidebarItemUrl}>
                <img className="sidebar__img" src={props.sidebarItemImageUrl} alt={props.sidebarItemImageAlt} />
            </a>
        </div>
  );
}

function PlayerBlock(props) {
  return (
    <div className="bar">
                <div className="bar__content">
                    <div className="bar__player-progress"/>
                    <div className="bar__player-block">
                        <div className="bar__player player">
                            <div className="player__controls">
                                <div className="player__btn-prev">
                                    <svg className="player__btn-prev-svg" alt="prev">
                                        <use xlinkHref={props.playerIconPrevUrl} />
                                    </svg>
                                </div>
                                <div className="player__btn-play _btn">
                                    <svg className="player__btn-play-svg" alt="play">
                                        <use xlinkHref={props.playerIconPlayUrl} />
                                    </svg>
                                </div>
                                <div className="player__btn-next">
                                    <svg className="player__btn-next-svg" alt="next">
                                        <use xlinkHref={props.playerIconNextUrl} />
                                    </svg>
                                </div>
                                <div className="player__btn-repeat _btn-icon">
                                    <svg className="player__btn-repeat-svg" alt="repeat">
                                        <use xlinkHref={props.playerIconRepeatUrl} />
                                    </svg>
                                </div>
                                <div className="player__btn-shuffle _btn-icon">
                                    <svg className="player__btn-shuffle-svg" alt="shuffle">
                                        <use xlinkHref={props.playerIconShuffleUrl}/>
                                    </svg>
                                </div>
                            </div>
                            <div className="player__track-play track-play">
                              <TrackPlayContain />
                                <div className="track-play__like-dis">
                                    <div className="track-play__like _btn-icon">
                                        <svg className="track-play__like-svg" alt="like">
                                            <use xlinkHref={props.playerIconLikeUrl} />
                                        </svg>
                                    </div>
                                    <div className="track-play__dislike _btn-icon">
                                        <svg className="track-play__dislike-svg" alt="dislike">
                                            <use xlinkHref={props.playerIconDislikeUrl} />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bar__volume-block volume">
                           <div className="volume__content">
                                <div className="volume__image">
                                    <svg className="volume__svg" alt="volume">
                                        <use xlinkHref={props.playerIconVolumeUrl} />
                                    </svg>
                                </div>
                                <div className="volume__progress _btn">
                                    <input className="volume__progress-line _btn" type="range" name="range" />
                                </div>
                                
                           </div>
                        </div>
                    </div>
                </div>
            </div>
  );
}

function TrackPlayContain() {
  return (
    <div className="track-play__contain"> 
        <TrackPlay playTrackImageUrl="img/icon/sprite.svg#icon-note"
                   playTrackNameUrl="http://"
                   playTrackNameTitle="Ты та..."
                   playTrackAuthorUrl="http://"
                   playTrackAuthorTitle="Баста" />
    </div>                         
  );
}

function TrackPlay(props) {
  return (
    <>
          <div className="track-play__image">
             <svg className="track-play__svg" alt="music">
                 <use xlinkHref={props.playTrackImageUrl} />
             </svg>
          </div>
          <div className="track-play__author">
             <a className="track-play__author-link" href={props.playTrackNameUrl}>{props.playTrackNameTitle}</a>
          </div>
          <div className="track-play__album">
            <a className="track-play__album-link" href={props.playTrackAuthorUrl}>{props.playTrackAuthorTitle}</a>
          </div> 
    </> 
                                                     
  );
}

export default Wrapper;




