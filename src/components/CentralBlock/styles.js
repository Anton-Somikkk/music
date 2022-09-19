/* eslint-disable import/prefer-default-export */
import styled, { css } from "styled-components";

const mainCenterBlock = css`
    width: auto;
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
`;

const centerBlock = css`
 
`;

export const MainCenterBlock = styled.div`
${mainCenterBlock}
${centerBlock}
`;

const centerBlockSearch = css`
    width: 100%;
    border-bottom: 1px solid #4E4E4E;
    margin-bottom: 51px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const search = css`
`;

export const CenterBlockSearch  = styled.div`
${centerBlockSearch}
${search}
`;

export const SearchSvg = styled.svg`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: #FFF;
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
color: #FFF;

&::placeholder {
    background-color: transparent;
    color: #FFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}
`;

const contentPlayList = css`
display: flex;
flex-direction: column;
overflow-y: auto;
`;

const playList = css`
`;

export const ContentPlayList = styled.div`
${contentPlayList}
${playList}
`;

export const CenterBlockSubTitle = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
margin-bottom: 45px;
`;
