import tracks from '../../tracks';
import * as S from "./styles";

function FilterPopupListYears(props) {
    return (
 
      <S.PopupItem>
        {tracks[props.trackNumber].trackYear}</S.PopupItem> 
    );  
}

export default function FilterPopupListYearsElementsRender() {
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