import styled, { css } from "styled-components";

export const CenterBlockContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContentTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`;

const playListTitleCol = css`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
`;

const col01 = css`
    width: 447px;
`;

const col02 = css`
    width: 321px;
`;

const col03 = css`
    width: 245px;
`;

const col04 = css`
    width: 60px;
    text-align: end;
`;

export const PlayListTitleCol01 = styled.div`
    ${playListTitleCol}
    ${col01}
`;

export const PlayListTitleCol02 = styled.div`
    ${playListTitleCol}
    ${col02}
`;

export const PlayListTitleCol03 = styled.div`
    ${playListTitleCol}
    ${col03}
`;

export const PlayListTitleCol04 = styled.div`
    ${playListTitleCol}
    ${col04}
`;
export const PlayListTitleSvg = styled.svg`
    width: 12px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;
