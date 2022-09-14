import React, {useRef} from "react";
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

const { useState } = React;

function MainLeftBar(props) {

  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  return (
              <nav className="main__nav nav">
                    <div className="nav__logo logo">
                        <img className="logo__image" src={props.logoUrl} alt="logo" />
                    </div>

                    <div role="presentation" className="nav__burger burger" onClick={toggleVisibility} onKeyDown={toggleVisibility}>
                    <span className="burger__line" />
                        <span className="burger__line" />
                        <span className="burger__line" />
                    </div>
                    
                    {visible && (<MainLeftBarMenu menuItemMainUrl="http://"
                      menuItemPlayListUrl="http://" menuItemEnterUrl="http://" />
                      )}
                    
              </nav>
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
                      <div className="content__playlist playlist">
                      <CentralBlockPlayList />
                      </div>
                </div>
  );
}

function CentralBlockTitle(props) {
  return (
          <h2 className="centerblock__h2">{props.title}</h2>
  );
  
}

function FilterPopupListAuthors(props) {
  return (
 
      <div className="filter__popup-item">
        {tracks[props.trackNumber].trackAuthorTitle}</div> 
    );
  
}

function FilterPopupListAuthorsElementsRender() {
    const elemCollection = [<FilterPopupListAuthors trackNumber={0} key={0}/>];
    const items = [tracks[0].trackAuthorTitle];

    for (let i = 0; i < tracks.length - 1; i += 1) {

      if (items.indexOf(tracks[i + 1].trackAuthorTitle) < 0) {
          items.push(tracks[i + 1].trackAuthorTitle);
          const elem = <FilterPopupListAuthors trackNumber={i + 1} key={i + 1}/>
          elemCollection.push(elem);
      }
    }

    return (
            elemCollection
            );   
}

function FilterPopupListYears(props) {
    return (
 
      <div className="filter__popup-item">
        {tracks[props.trackNumber].trackYear}</div> 
    );  
}

function FilterPopupListYearsElementsRender() {
        const elemCollection = [<FilterPopupListYears trackNumber={0} key={0}/>];
        const items = [tracks[0].trackYear];

        for (let i = 0; i < tracks.length - 1; i += 1) {
          
          if (items.indexOf(tracks[i + 1].trackYear) < 0) {
              items.push(tracks[i + 1].trackYear); 
              const elem = <FilterPopupListYears trackNumber={i + 1} key={i + 1}/>
              elemCollection.push(elem);
          }
        }

        return (
          
                elemCollection
                );  
}

function FilterPopupListGenre(props) {
  return (
 
      <div className="filter__popup-item">
        {tracks[props.trackNumber].trackGenre}</div> 
    );
}

function FilterPopupListGenreElementsRender() {
  const elemCollection = [<FilterPopupListGenre trackNumber={0} key={0}/>];
  const items = [tracks[0].trackGenre];

  for (let i = 0; i < tracks.length - 1; i += 1) {

          if (items.indexOf(tracks[i + 1].trackGenre) < 0) {
            
              items.push(tracks[i + 1].trackGenre);
              const elem = <FilterPopupListGenre trackNumber={i + 1} key={i + 1}/>
              elemCollection.push(elem);
          } 
  }
  return (
    
          elemCollection
          );  
}

function CentralBlockFilter() {

  const [visibleListAuthors, setVisibleListAuthors] = useState(false);
  const [visibleListYears, setVisibleListYears] = useState(false);
  const [visibleListGenre, setVisibleListGenre] = useState(false);

  const listAuthors = useRef(null);
  const listYears = useRef(null);
  const listGenre = useRef(null);

  const toggleVisibilityListAuthors = () => {
    setVisibleListAuthors(!visibleListAuthors);
    setVisibleListYears(null);
    setVisibleListGenre(null);
    listAuthors.current.classList.add('button-focus');
    listYears.current.classList.remove('button-focus');
    listGenre.current.classList.remove('button-focus');
  };

  const toggleVisibilityListYears = () => {
    setVisibleListYears(!visibleListYears);
    setVisibleListAuthors(null);
    setVisibleListGenre(null);
    listYears.current.classList.add('button-focus');
    listAuthors.current.classList.remove('button-focus');
    listGenre.current.classList.remove('button-focus');
  };
  
  const toggleVisibilityListGenre = () => {
    setVisibleListGenre(!visibleListGenre);
    setVisibleListAuthors(null);
    setVisibleListYears(null);
    listGenre.current.classList.add('button-focus');
    listYears.current.classList.remove('button-focus');
    listAuthors.current.classList.remove('button-focus');
  };


  return (
    
      <div className="centerblock__filter filter">

          <div className="filter__title">Искать по:
          </div>

          <div ref={listAuthors} role="presentation" className="filter__button button-author _btn-text"
                onClick={toggleVisibilityListAuthors} 
                onKeyDown={toggleVisibilityListAuthors}>исполнителю
          </div>

          <div ref={listYears} role="presentation" className="filter__button button-year _btn-text"
                onClick={toggleVisibilityListYears}
                onKeyDown={toggleVisibilityListYears}>году выпуска
          </div>

          <div ref={listGenre} role="presentation" className="filter__button button-genre _btn-text"
                onClick={toggleVisibilityListGenre}
                onKeyDown={toggleVisibilityListGenre}>жанру
          </div>

            {visibleListAuthors && (<div role="presentation" onClick={toggleVisibilityListAuthors} 
              onKeyDown={toggleVisibilityListAuthors} className="centerblock__popup-list-authors centerblock__popup-list_overflow">
              <FilterPopupListAuthorsElementsRender />
            </div>)}

            {visibleListYears && (<div role="presentation" onClick={toggleVisibilityListYears}
              onKeyDown={toggleVisibilityListYears} className="centerblock__popup-list-years centerblock__popup-list_overflow">
              <FilterPopupListYearsElementsRender />
            </div>)}

            {visibleListGenre && (<div role="presentation" onClick={toggleVisibilityListGenre} 
              onKeyDown={toggleVisibilityListGenre} className="centerblock__popup-list-genre centerblock__popup-list_overflow">
              <FilterPopupListGenreElementsRender />
            </div>)}
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
  
  const elemCollection = [];
  for (let i = 0; i < tracks.length; i += 1) {
    const elem = <PlayListItem trackNumber={i} key={i}/>
    elemCollection.push(elem);     
  }

  return (
    elemCollection
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




