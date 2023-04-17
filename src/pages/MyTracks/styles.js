import styled, { css } from "styled-components";

export const CenterBlock = styled.div`
    width: auto;
    flex-grow: 3;
    padding: 20px 40px 20px 40px;
`;

export const TitleWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`;

export const PlaylistTitles = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: rgba(105, 105, 105);
    text-transform: uppercase;
`;

export const TitleTrack = styled(PlaylistTitles)`
    width: 20%;
`;

export const TitleAuthor = styled(PlaylistTitles)`
    width: 321px;
`;

export const TitleAlbum = styled(PlaylistTitles)`
    width: 245px;
`;

export const TitleTime = styled.div`
    width: 60px;
    text-align: end;
`;

export const WatchIcon = styled.img`
    width: 12px;
    height: 17px;
    color: rgba(105, 105, 105);
    background-color: transparent;
`;
export const CenterBlockTitle = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
`;

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
export const MainCenterBlock = styled.div`
    width: auto;
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
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
    overflow-y: auto;
`;

export const CenterBlockSubTitle = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
`;
