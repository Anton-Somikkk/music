import styled, { css } from "styled-components";

const btn = css`
    cursor: pointer;
`;

export const Bar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(28, 28, 28, 0.5);
`;

export const BarContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BarPlayerProgress = styled.div`
    width: 100%;
    height: 5px;
    background: #2e2e2e;
`;

export const BarPlayerProgressMoving = styled.div`
    width: ${props => (props.isPlaying ? "10px" : "0")};
    height: 5px;
    background: rgba(173, 97, 255, 1);
`;

export const BarPlayerBlock = styled.div`
    height: 73px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const BarPlayer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const PlayerControls = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 27px 0 31px;
`;

const {
    playerBtnPrev,
    playerBtnNext,
    playerBtnPlay,
    playerBtnRepeat,
    playerBtnShuffle,
} = css`
    padding: 5px;
    display: flex;
    align-items: center;
`;
const btnPrev = css`
    margin-right: 23px;
`;

const btnPlay = css`
    margin-right: 23px;
`;

const btnNext = css`
    margin-right: 28px;
    fill: #a53939;
`;

const btnRepeat = css`
    margin-right: 24px;
`;

const btnShuffle = css`
    display: flex;
    align-items: center;
`;

export const PlayerBtnPrev = styled.div`
    ${playerBtnPrev}
    ${btnPrev}
`;

export const PlayerBtnPlay = styled.div`
    ${playerBtnPlay}
    ${btnPlay}
${btn}
`;

export const PlayerBtnNext = styled.div`
    ${playerBtnNext}
    ${btnNext}
`;

const btnIcon = css`
    :hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
`;

export const PlayerBtnRepeat = styled.div`
    ${playerBtnRepeat}
    ${btnRepeat}
${btnIcon}
`;

export const PlayerBtnShuffle = styled.div`
    ${playerBtnShuffle}
    ${btnShuffle}
${btnIcon}
`;

export const PlayerBtnPrevSvg = styled.svg`
    width: 15px;
    height: 14px;
`;

export const PlayerBtnPlaySvg = styled.svg`
    width: 22px;
    height: 20px;
    fill: #d9d9d9;
`;

export const PlayerBtnNextSvg = styled.svg`
    width: 15px;
    height: 14px;
    fill: inherit;
    stroke: #d9d9d9;
`;

export const PlayerBtnRepeatSvg = styled.svg`
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;

export const PlayerBtnShuffleSvg = styled.svg`
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;

export const PlayerTrackPlay = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TrackPlayLikeDis = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 26%;
`;

const { trackPlayLike, trackPlayDislike } = css`
    padding: 5px;
`;

const marginDislike = css`
    margin-left: 28.5px;
`;

export const TrackPlayLike = styled.div`
    ${btnIcon}
    ${trackPlayLike}
`;

export const TrackPlayDislike = styled.div`
    ${btnIcon}
    ${trackPlayDislike}
${marginDislike}
`;

export const TrackPlayLikeSvg = styled.svg`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;

export const TrackPlayDislikeSvg = styled.svg`
    width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
`;

export const BarVolumeBlock = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    padding: 0 92px 0 0;
`;

export const VolumeContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
`;

export const VolumeImage = styled.div`
    width: 13px;
    height: 18px;
    margin-right: 17px;
`;

export const VolumeSvg = styled.svg`
    width: 13px;
    height: 18px;
    fill: transparent;
`;

const volumeProgress = css`
    width: 109px;
`;

export const VolumeProgress = styled.div`
    ${btn}
    ${volumeProgress}
`;

const volumeProgressLine = css`
    width: 109px;
`;

export const VolumeProgressLine = styled.input`
    ${btn}
    ${volumeProgressLine}
`;
