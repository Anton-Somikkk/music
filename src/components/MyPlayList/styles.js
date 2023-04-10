import styled from "styled-components";

export const MyPlayList = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: 64vh;
`;
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
