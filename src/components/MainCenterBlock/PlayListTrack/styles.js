import styled from "styled-components";

export const PlayListTrack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    &:hover {
        background-color: #313131;
        
    }
`;

export const TrackTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 447px;
`;

export const TrackTitleImage = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17px;
    cursor: pointer;
`;

export const TrackTitleSvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
`;

export const TrackTitleText = styled.div`
    &:hover {
        background-color: #313131;
    }
`;

export const TrackTitleLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    cursor: pointer;
`;

export const TrackTitleSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4e4e4e;
`;

export const TrackAuthor = styled.div`
    width: 321px;
    display: flex;
    justify-content: flex-start;
`;

export const TrackAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    text-align: left;
`;

export const TrackAlbum = styled.div`
    width: 245px;
`;

export const TrackAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
`;

export const TrackTime = styled.div``;

export const IconLikeSvg = styled.svg`
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: #696969;
    stroke: #696969;
    cursor: pointer;
`;

export const IconNotLikeSvg = styled.svg`
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: transparent;
    stroke: #696969;
    cursor: pointer;
`;

export const TrackTimeText = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
`;
