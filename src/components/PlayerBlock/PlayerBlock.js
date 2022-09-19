import TrackPlayContain from '../TrackPlayContain/TrackPlayContain';

export default function PlayerBlock(props) {
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
                                <TrackPlayContain initSeconds={3} />
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