import CentralBlockPlayList from '../CentralBlockPlayList/CentralBlockPlayList';
import CentralBlockFilter from '../CentralBlockFilter/CentralBlockFilter';
import CentralBlockContent from '../CentralBlockContent/CentralBlockContent';
import * as S from "./styles";

export default function CentralBlock(props) {
    return (
                  <S.MainCenterBlock>
                      <S.CenterBlockSearch>
                          <S.SearchSvg>
                              <use xlinkHref={props.searchImageUrl} />
                          </S.SearchSvg>
                          <S.SearchText type="search" placeholder="Поиск" name="search" />
                      </S.CenterBlockSearch>
                        <CentralBlockTitle title="Треки" />
                        <CentralBlockFilter />
                        <CentralBlockContent iconWatchUrl="img/icon/sprite.svg#icon-watch" />
                        <S.ContentPlayList>
                        <CentralBlockPlayList initSeconds={3}/>
                        </S.ContentPlayList>
                  </S.MainCenterBlock>
    );
}

function CentralBlockTitle(props) {
    return (
            <S.CenterBlockSubTitle>{props.title}</S.CenterBlockSubTitle>
    );
  }