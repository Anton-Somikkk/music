import tracks from "../../tracks";
import * as S from "./styles";

function FilterPopupListAuthors(props) {
    return (
        <S.PopupItem>{tracks[props.trackNumber].trackAuthorTitle}</S.PopupItem>
    );
}

export default function FilterPopupListAuthorsElementsRender() {
    const elemCollection = [<FilterPopupListAuthors trackNumber={0} key={0} />];
    const items = [tracks[0].trackAuthorTitle];

    for (let i = 0; i < tracks.length - 1; i += 1) {
        if (items.indexOf(tracks[i + 1].trackAuthorTitle) < 0) {
            items.push(tracks[i + 1].trackAuthorTitle);
            const elem = (
                <FilterPopupListAuthors trackNumber={i + 1} key={i + 1} />
            );
            elemCollection.push(elem);
        }
    }

    return elemCollection;
}
