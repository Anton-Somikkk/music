import styled from "styled-components";

export const MainCenterBlock = styled.div`
    width: auto;
    flex-grow: 3;
    padding: 20px 40px 20px 40px;
`;

export const CenterBlockContent = styled.section`
    display: flex;
    flex-direction: column;
    
`;

export const CenterBlockSearch = styled.div`
    width: 100%;
    border-bottom: 1px solid #4e4e4e;
    margin-bottom: 51px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SearchSvg = styled.svg`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: #fff;
    fill: transparent;
`;

export const SearchText = styled.input`
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #fff;

    &::placeholder {
        background-color: transparent;
        color: #fff;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`;

export const ContentPlayList = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-height: 64vh;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const CenterBlockSubTitle = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
`;
