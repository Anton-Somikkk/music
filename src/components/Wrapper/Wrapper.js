import MainLeftBar from '../MainLeftBar/MainLeftBar';
import CentralBlock from '../CentralBlock/CentralBlock';
import MainSidebarRight from '../MainSidebarRight/MainSidebarRight';
import PlayerBlock from '../PlayerBlock/PlayerBlock';


export default function Wrapper() {

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
