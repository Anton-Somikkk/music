import styled from 'styled-components'

export const SelectPlayList = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-height: 64vh;
    ::-webkit-scrollbar {
        display: none;
    }
`
export const PlayListItemSkeleton = styled.img``;

export const PlayListItem = styled.div`
    width: 100%;
    display: block;
    margin-bottom: 12px;
    &:hover {
        background-color: #313131;
        cursor: pointer;
    }
`;