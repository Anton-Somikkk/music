import styled, { css } from "styled-components";

export const CenterBlockFilter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 51px;
    position: relative;
`;

export const FilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`;


const popupList = css`
    width: 200px;
    height: 200px;
    position: absolute;
    top: 50px;
    left: 85px;
    padding: 10px;
    border-radius: 10px;
    background-color: #313131;
`;

const popupListOverflow = css`
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 20px;
    }
    ::-webkit-scrollbar-track {
        background: #313131;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #181818;
        border-radius: 10px;
        border: 3px solid #fff;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: #fff;
        border: 3px solid #181818;
    }
`;

export const PopupListAuthor = styled.div`
    ${popupListOverflow}
    ${popupList}
`;

export const PopupListYear = styled.div`
    ${popupListOverflow}
    ${popupList}
`;
export const PopupListGenre = styled.div`
    ${popupListOverflow}
    ${popupList}
`;
