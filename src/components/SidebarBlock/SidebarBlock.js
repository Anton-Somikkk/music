import { useEffect, useState } from "react";
import * as S from "./styles";

import SidebarItem from '../SidebarItem/SidebarItem';

export default function SidebarBlock(props) {

    const { initSeconds = 10 } = props;
    const [seconds, setSeconds] = useState(initSeconds);
  
    useEffect(() => {
      const myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        } if (seconds === 0) {
          
            clearInterval(myInterval)
              } 
      }, 1000)
  
      return () => {
        clearInterval(myInterval)
      }
    });
  
    return (
            <S.SidebarBlock>
                <S.SidebarList>
  
                  { seconds === 0 ? (
                  <>
                    <SidebarItem sidebarItemUrl="#" sidebarItemImageUrl="img/playlist01.png" sidebarItemImageAlt="day's playlist" />
                    <SidebarItem sidebarItemUrl="#" sidebarItemImageUrl="img/playlist02.png" sidebarItemImageAlt="day's playlist" />
                    <SidebarItem sidebarItemUrl="#" sidebarItemImageUrl="img/playlist03.png" sidebarItemImageAlt="day's playlist" />
                  </>
                  ) : (
                    <>
                    <SidebarItem sidebarItemUrl="#" sidebarItemImageUrl="../img/Skeleton-sidebar-item.png" sidebarItemImageAlt="Загрузка плейлиста" />
                    <SidebarItem sidebarItemUrl="#" sidebarItemImageUrl="../img/Skeleton-sidebar-item.png" sidebarItemImageAlt="Загрузка плейлиста" />
                    <SidebarItem sidebarItemUrl="#" sidebarItemImageUrl="../img/Skeleton-sidebar-item.png" sidebarItemImageAlt="Загрузка плейлиста" />
                    </>
                  )}
                </S.SidebarList>
            </S.SidebarBlock>
    );
  }