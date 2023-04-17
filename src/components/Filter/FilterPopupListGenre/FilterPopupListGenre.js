
import * as S from './styles'
import { useThemeContext } from '../../../count-context'

export default function FilterPopupListGenre({ value, onClickFunction }) {
    const { theme } = useThemeContext();

    return (
        <S.FilterItemsLabel htmlFor="filter" style={{ backgroundColor: theme.backgroundNote, color: theme.color }}>
            <S.FilterItem
                id={value}
                name="filter"
                type="checkbox"
                value={value}
                onClick={onClickFunction}
            />
            <S.FilterLabel style={{ backgroundColor: theme.backgroundNote, color: theme.color }} htmlFor={value}>{value}</S.FilterLabel>
        </S.FilterItemsLabel>
    )
}

