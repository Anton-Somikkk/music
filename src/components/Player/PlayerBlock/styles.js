import styled, { css } from "styled-components";

const btn = css`
    cursor: pointer;
`;

export const Bar = styled.div`
    position: absolute;
    bottom: ${(props) => (props.isPlaying ? "0" : "-100%")};
    left: 0;
    width: 100%;
    background-color: rgba(28, 28, 28, 0.5);
    transition: background-color, bottom 0.5s ease;
`;

export const BarContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BarPlayerProgressMoving = styled.input`
    width: 100%;
    height: 6px;
    -webkit-appearance: none;
    background: linear-gradient(
        90deg,
        #57459d
            ${(props) =>
                props.backgroundValue !== "" ? props.backgroundValue : "0"}%,
        rgba(46, 46, 46, 1)
            ${(props) =>
                props.backgroundValue !== "" ? props.backgroundValue : "0"}%
    );
    cursor: pointer;
    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        border: 0;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        cursor: pointer;
    }
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
    align-items: center;
    padding: 0 27px 0 31px;
`;

const {
    playerBtnPrev,
    playerBtnNext,
    playerBtnPlay,
    playerBtnRepeat,
    playerBtnShuffle,
} = css`
    display: flex;
    align-items: center;
    padding: 5px;
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

export const PlayerBtnRepeat = styled.div`
    ${playerBtnRepeat}
    ${btnRepeat}
    ${btn}
`;

export const PlayerBtnShuffle = styled.div`
    ${playerBtnShuffle}
    ${btn}
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
    ${trackPlayLike}
`;

export const TrackPlayDislike = styled.div`
    ${trackPlayDislike}
    ${marginDislike}
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
    cursor: pointer;
`;

const volumeProgress = css`
    width: 109px;
`;

export const VolumeProgress = styled.div`
   
    ${volumeProgress}
`;



export const VolumeProgressLine = styled.input`
    
-webkit-appearance: none;
background: transparent;
cursor: pointer;
::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
}
::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #1a1a1a;
    border: 2px solid #ffffff;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -6px;
}
::-webkit-slider-runnable-track {
    width: 100%;
    height: 0;
    border: 2px solid #797979;
    background: #ffffff;
    border-radius: 2px;
}
`;

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
