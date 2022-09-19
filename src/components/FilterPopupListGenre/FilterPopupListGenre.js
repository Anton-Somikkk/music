import tracks from '../../tracks';

function FilterPopupListGenre(props) {
    return (
   
        <div className="filter__popup-item">
          {tracks[props.trackNumber].trackGenre}</div> 
      );
  }
  
  export default function FilterPopupListGenreElementsRender() {
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