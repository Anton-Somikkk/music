import {useRef, useState} from "react";
import FilterPopupListAuthorsElementsRender from '../FilterPopupListAuthors/FilterPopupListAuthors';
import FilterPopupListYearsElementsRender from '../FilterPopupListYears/FilterPopupListYears';
import FilterPopupListGenreElementsRender from '../FilterPopupListGenre/FilterPopupListGenre';


export default function CentralBlockFilter() {

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
                  onClick={toggleVisibilityListAuthors}>исполнителю</div>
  
            <div ref={listYears} role="presentation" className="filter__button button-year _btn-text"
                  onClick={toggleVisibilityListYears}>году выпуска</div>
  
            <div ref={listGenre} role="presentation" className="filter__button button-genre _btn-text"
                  onClick={toggleVisibilityListGenre}>жанру</div>
  
              {visibleListAuthors && (<div role="presentation" onClick={toggleVisibilityListAuthors} 
                 className="centerblock__popup-list-authors centerblock__popup-list_overflow">
                <FilterPopupListAuthorsElementsRender />
              </div>)}
  
              {visibleListYears && (<div role="presentation" onClick={toggleVisibilityListYears}
                 className="centerblock__popup-list-years centerblock__popup-list_overflow">
                <FilterPopupListYearsElementsRender />
              </div>)}
  
              {visibleListGenre && (<div role="presentation" onClick={toggleVisibilityListGenre} 
                className="centerblock__popup-list-genre centerblock__popup-list_overflow">
                <FilterPopupListGenreElementsRender />
              </div>)}
        </div>
    );
}